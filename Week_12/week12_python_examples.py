"""
Week 12: Advanced Backend Development - Flask/FastAPI with SQLAlchemy

This file covers:
1. FastAPI setup and routing
2. SQLAlchemy ORM configuration
3. Database models and relationships
4. JWT authentication
5. Password hashing with bcrypt
6. Dependency injection
7. CRUD operations
8. Query optimization
9. Error handling
10. Input validation with Pydantic
11. Authorization and role-based access
12. Database migrations with Alembic
13. Async/await in FastAPI
14. Testing patterns
15. Best practices

Install requirements:
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose bcrypt
pip install python-multipart pydantic[email] alembic python-dotenv
"""

from fastapi import FastAPI, HTTPException, Depends, status, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Boolean, DateTime, ForeignKey, Table, Text, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, Session
from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional, List
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from passlib.hash import bcrypt
import os
from dotenv import load_dotenv
import logging

load_dotenv()

# ============================================================================
# 1. APP SETUP AND CONFIGURATION
# ============================================================================

"""
FastAPI is a modern, fast web framework for building APIs with Python
It supports async/await and automatic OpenAPI documentation
"""

app = FastAPI(
    title="Blog API",
    description="Production-grade blog API with authentication",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ============================================================================
# 2. DATABASE CONFIGURATION
# ============================================================================

"""
Configure SQLAlchemy ORM with PostgreSQL
"""

# Database connection string
DATABASE_URL = f"postgresql://{os.getenv('DB_USER', 'postgres')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST', 'localhost')}:{os.getenv('DB_PORT', 5432)}/{os.getenv('DB_NAME', 'bootcamp')}"

# Create engine with connection pooling
engine = create_engine(
    DATABASE_URL,
    echo=os.getenv('ENVIRONMENT') == 'development',
    pool_pre_ping=True,  # Verify connections before using them
    pool_size=20,
    max_overflow=0
)

# Create session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Declare base for all models
Base = declarative_base()

# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ============================================================================
# 3. SECURITY CONFIGURATION
# ============================================================================

"""
JWT and password hashing configuration
"""

# JWT configuration
SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key-change-in-production')
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 24 * 60  # 24 hours

# Password hashing context
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

# ============================================================================
# 4. DATABASE MODELS
// ============================================================================

"""
Define SQLAlchemy models representing database tables
"""

# Association table for many-to-many relationship (Posts <-> Tags)
post_tags = Table(
    'post_tags',
    Base.metadata,
    Column('post_id', Integer, ForeignKey('posts.id', ondelete='CASCADE')),
    Column('tag_id', Integer, ForeignKey('tags.id', ondelete='CASCADE'))
)

class User(Base):
    """User model"""
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    role = Column(String, default='user')  # 'user' or 'admin'
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    last_login = Column(DateTime, nullable=True)
    
    # Relationships
    posts = relationship("Post", back_populates="author", cascade="all, delete-orphan")
    comments = relationship("Comment", back_populates="author", cascade="all, delete-orphan")
    
    # Method to set password (hashed)
    def set_password(self, password: str):
        """Hash and set password"""
        self.password_hash = pwd_context.hash(password)
    
    # Method to verify password
    def verify_password(self, password: str) -> bool:
        """Verify password against hash"""
        return pwd_context.verify(password, self.password_hash)
    
    # Exclude password from JSON
    def dict_exclude_password(self):
        """Return user data without password"""
        return {
            'id': self.id,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'role': self.role,
            'is_active': self.is_active,
            'created_at': self.created_at,
            'last_login': self.last_login
        }

class Post(Base):
    """Post model"""
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), index=True, nullable=False)
    content = Column(Text, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    published = Column(Boolean, default=False)
    view_count = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    author = relationship("User", back_populates="posts")
    comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")
    tags = relationship("Tag", secondary=post_tags, back_populates="posts")

class Comment(Base):
    """Comment model"""
    __tablename__ = "comments"
    
    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text, nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id', ondelete='CASCADE'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    post = relationship("Post", back_populates="comments")
    author = relationship("User", back_populates="comments")

class Tag(Base):
    """Tag model"""
    __tablename__ = "tags"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, index=True, nullable=False)
    
    # Relationships
    posts = relationship("Post", secondary=post_tags, back_populates="tags")

# Create all tables
Base.metadata.create_all(bind=engine)

# ============================================================================
// 5. PYDANTIC SCHEMAS - INPUT VALIDATION
// ============================================================================

"""
Pydantic models for request validation and response serialization
"""

# User schemas
class UserCreate(BaseModel):
    """Schema for user registration"""
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=100)
    first_name: str = Field(..., min_length=1, max_length=50)
    last_name: str = Field(..., min_length=1, max_length=50)
    
    @validator('password')
    def password_strength(cls, v):
        if not any(char.isdigit() for char in v):
            raise ValueError('Password must contain at least one digit')
        if not any(char.isupper() for char in v):
            raise ValueError('Password must contain at least one uppercase letter')
        return v

class UserLogin(BaseModel):
    """Schema for user login"""
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    """Schema for user response"""
    id: int
    email: str
    first_name: str
    last_name: str
    role: str
    is_active: bool
    created_at: datetime
    last_login: Optional[datetime]
    
    class Config:
        from_attributes = True

# Post schemas
class TagResponse(BaseModel):
    """Schema for tag response"""
    id: int
    name: str
    
    class Config:
        from_attributes = True

class PostCreate(BaseModel):
    """Schema for creating/updating post"""
    title: str = Field(..., min_length=5, max_length=200)
    content: str = Field(..., min_length=10)
    published: bool = False
    tag_ids: Optional[List[int]] = None

class PostResponse(BaseModel):
    """Schema for post response"""
    id: int
    title: str
    content: str
    published: bool
    view_count: int
    author: UserResponse
    created_at: datetime
    updated_at: datetime
    tags: List[TagResponse]
    
    class Config:
        from_attributes = True

class CommentCreate(BaseModel):
    """Schema for creating comment"""
    content: str = Field(..., min_length=1, max_length=1000)

class CommentResponse(BaseModel):
    """Schema for comment response"""
    id: int
    content: str
    author: UserResponse
    created_at: datetime
    
    class Config:
        from_attributes = True

# Auth schemas
class Token(BaseModel):
    """JWT Token response"""
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

class TokenData(BaseModel):
    """Token payload data"""
    user_id: int
    role: str

# ============================================================================
// 6. JWT AUTHENTICATION FUNCTIONS
// ============================================================================

"""
Functions to create and verify JWT tokens
"""

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """Create JWT token"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(hours=24)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str) -> TokenData:
    """Verify and decode JWT token"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: int = payload.get("sub")
        role: str = payload.get("role")
        
        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token"
            )
        
        return TokenData(user_id=user_id, role=role)
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )

# ============================================================================
// 7. DEPENDENCIES - AUTHENTICATION
// ============================================================================

"""
FastAPI dependencies for authentication and authorization
"""

async def get_current_user(
    token: str = Query(...),
    db: Session = Depends(get_db)
) -> User:
    """Get current authenticated user"""
    token_data = verify_token(token)
    user = db.query(User).filter(User.id == token_data.user_id).first()
    
    if not user or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found or inactive"
        )
    
    return user

async def get_admin_user(current_user: User = Depends(get_current_user)) -> User:
    """Dependency to check if user is admin"""
    if current_user.role != 'admin':
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required"
        )
    return current_user

# ============================================================================
// 8. API ROUTES - AUTHENTICATION
// ============================================================================

"""
User registration and login endpoints
"""

@app.post("/api/auth/register", response_model=Token)
async def register(user_data: UserCreate, db: Session = Depends(get_db)):
    """Register new user"""
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user_data.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered"
        )
    
    # Create new user
    user = User(
        email=user_data.email,
        first_name=user_data.first_name,
        last_name=user_data.last_name
    )
    user.set_password(user_data.password)
    
    db.add(user)
    db.commit()
    db.refresh(user)
    
    # Generate token
    access_token = create_access_token(
        data={"sub": user.id, "role": user.role}
    )
    
    logger.info(f"User registered: {user.email}")
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": UserResponse.from_orm(user)
    }

@app.post("/api/auth/login", response_model=Token)
async def login(credentials: UserLogin, db: Session = Depends(get_db)):
    """Login user"""
    user = db.query(User).filter(User.email == credentials.email).first()
    
    if not user or not user.verify_password(credentials.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
    # Update last login
    user.last_login = datetime.utcnow()
    db.commit()
    
    # Generate token
    access_token = create_access_token(
        data={"sub": user.id, "role": user.role}
    )
    
    logger.info(f"User logged in: {user.email}")
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": UserResponse.from_orm(user)
    }

@app.get("/api/auth/me", response_model=UserResponse)
async def get_current_profile(current_user: User = Depends(get_current_user)):
    """Get current user profile"""
    return UserResponse.from_orm(current_user)

# ============================================================================
// 9. API ROUTES - POSTS (CRUD)
// ============================================================================

"""
CRUD operations for posts with proper authorization
"""

@app.post("/api/posts", response_model=PostResponse)
async def create_post(
    post_data: PostCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Create new post"""
    post = Post(
        title=post_data.title,
        content=post_data.content,
        published=post_data.published,
        user_id=current_user.id
    )
    
    # Add tags if provided
    if post_data.tag_ids:
        tags = db.query(Tag).filter(Tag.id.in_(post_data.tag_ids)).all()
        post.tags = tags
    
    db.add(post)
    db.commit()
    db.refresh(post)
    
    logger.info(f"Post created: {post.id} by user {current_user.id}")
    
    return PostResponse.from_orm(post)

@app.get("/api/posts", response_model=List[PostResponse])
async def list_posts(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    published_only: bool = True,
    db: Session = Depends(get_db)
):
    """List all posts with pagination"""
    query = db.query(Post)
    
    if published_only:
        query = query.filter(Post.published == True)
    
    posts = query.offset(skip).limit(limit).all()
    return [PostResponse.from_orm(post) for post in posts]

@app.get("/api/posts/{post_id}", response_model=PostResponse)
async def get_post(post_id: int, db: Session = Depends(get_db)):
    """Get single post"""
    post = db.query(Post).filter(Post.id == post_id).first()
    
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Increment view count
    post.view_count += 1
    db.commit()
    
    return PostResponse.from_orm(post)

@app.put("/api/posts/{post_id}", response_model=PostResponse)
async def update_post(
    post_id: int,
    post_data: PostCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update post (only by author or admin)"""
    post = db.query(Post).filter(Post.id == post_id).first()
    
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Check authorization
    if post.user_id != current_user.id and current_user.role != 'admin':
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to update this post"
        )
    
    # Update fields
    post.title = post_data.title
    post.content = post_data.content
    post.published = post_data.published
    
    # Update tags
    if post_data.tag_ids is not None:
        tags = db.query(Tag).filter(Tag.id.in_(post_data.tag_ids)).all()
        post.tags = tags
    
    db.commit()
    db.refresh(post)
    
    logger.info(f"Post updated: {post.id}")
    
    return PostResponse.from_orm(post)

@app.delete("/api/posts/{post_id}")
async def delete_post(
    post_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete post"""
    post = db.query(Post).filter(Post.id == post_id).first()
    
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    if post.user_id != current_user.id and current_user.role != 'admin':
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized"
        )
    
    db.delete(post)
    db.commit()
    
    logger.info(f"Post deleted: {post_id}")
    
    return {"message": "Post deleted"}

# ============================================================================
// 10. API ROUTES - COMMENTS
// ============================================================================

@app.post("/api/posts/{post_id}/comments", response_model=CommentResponse)
async def create_comment(
    post_id: int,
    comment_data: CommentCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Create comment on post"""
    post = db.query(Post).filter(Post.id == post_id).first()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    comment = Comment(
        content=comment_data.content,
        post_id=post_id,
        user_id=current_user.id
    )
    
    db.add(comment)
    db.commit()
    db.refresh(comment)
    
    return CommentResponse.from_orm(comment)

@app.get("/api/posts/{post_id}/comments", response_model=List[CommentResponse])
async def list_comments(
    post_id: int,
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db)
):
    """List comments for a post"""
    comments = db.query(Comment).filter(
        Comment.post_id == post_id
    ).offset(skip).limit(limit).all()
    
    return [CommentResponse.from_orm(comment) for comment in comments]

# ============================================================================
// 11. QUERY OPTIMIZATION EXAMPLES
// ============================================================================

"""
Examples of optimized queries using SQLAlchemy
"""

async def get_user_stats(user_id: int, db: Session = Depends(get_db)):
    """Get user statistics with optimized queries"""
    # Single query with aggregation instead of multiple queries
    stats = db.query(
        User.id,
        User.email,
        func.count(Post.id).label('post_count'),
        func.count(Comment.id).label('comment_count'),
        func.sum(Post.view_count).label('total_views')
    ).outerjoin(Post).outerjoin(Comment).filter(
        User.id == user_id
    ).group_by(User.id).first()
    
    return stats

async def search_posts(
    query: str = Query(...),
    db: Session = Depends(get_db)
):
    """Search posts by title or content (with full-text search)"""
    # Using SQL LIKE for case-insensitive search
    posts = db.query(Post).filter(
        (Post.title.ilike(f"%{query}%")) |
        (Post.content.ilike(f"%{query}%"))
    ).all()
    
    return posts

# ============================================================================
// 12. ADMIN ROUTES
// ============================================================================

@app.get("/api/admin/users", response_model=List[UserResponse])
async def list_users(
    admin: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """List all users (admin only)"""
    users = db.query(User).all()
    return [UserResponse.from_orm(user) for user in users]

@app.patch("/api/admin/users/{user_id}/role")
async def update_user_role(
    user_id: int,
    new_role: str,
    admin: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Update user role (admin only)"""
    if new_role not in ['user', 'admin']:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid role"
        )
    
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    user.role = new_role
    db.commit()
    
    logger.info(f"User {user_id} role changed to {new_role}")
    
    return {"message": "Role updated"}

# ============================================================================
// 13. HEALTH CHECK AND STARTUP/SHUTDOWN
// ============================================================================

@app.get("/api/health")
async def health_check(db: Session = Depends(get_db)):
    """Health check endpoint"""
    try:
        db.execute("SELECT 1")
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection failed"
        )

@app.on_event("startup")
async def startup_event():
    """Run on application startup"""
    logger.info("Application startup")

@app.on_event("shutdown")
async def shutdown_event():
    """Run on application shutdown"""
    logger.info("Application shutdown")
    engine.dispose()

# ============================================================================
// 14. ERROR HANDLERS
// ============================================================================

from fastapi.responses import JSONResponse

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    """Handle HTTP exceptions"""
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "detail": exc.detail
        }
    )

@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    """Handle general exceptions"""
    logger.error(f"Unhandled exception: {exc}")
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "detail": "Internal server error"
        }
    )

# ============================================================================
// 15. BEST PRACTICES SUMMARY
// ============================================================================

"""
FastAPI + SQLAlchemy Best Practices:

1. Use Pydantic models for input validation
2. Always validate user input
3. Hash passwords with strong algorithms (bcrypt)
4. Use JWT tokens for stateless authentication
5. Implement proper authorization checks
6. Use dependency injection for code reuse
7. Eager load relationships to avoid N+1 queries
8. Use async/await for I/O operations
9. Implement proper error handling
10. Log important events and errors
11. Use database transactions for consistency
12. Implement rate limiting
13. Use connection pooling for database
14. Write tests for all endpoints
15. Document your API with docstrings
16. Use environment variables for secrets
17. Implement pagination for large datasets
18. Use database indexes on frequently queried columns
19. Implement API versioning
20. Monitor performance and optimize queries
"""

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=int(os.getenv("PORT", 8000)),
        reload=os.getenv("ENVIRONMENT") == "development"
    )