#!/bin/bash

################################################################################
# Week 15: Docker & DevOps Examples
# ==================================
# 
# This file demonstrates:
# - Dockerfile examples and multi-stage builds
# - Docker Compose orchestration
# - Docker networking and volumes
# - Best practices for production containers
# - DevOps workflows and container optimization
# 
# Run examples with: bash week15_docker_devops_examples.sh
################################################################################


# ============================================================================
# 1. BASIC DOCKERFILE FOR NODE.JS APPLICATION
# ============================================================================

create_nodejs_dockerfile() {
    cat > Dockerfile.nodejs << 'EOF'
# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (production only)
RUN npm ci --only=production

# Copy source code
COPY src ./src
COPY tsconfig.json ./

# Build TypeScript
RUN npm run build

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Copy from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Change ownership
RUN chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node healthcheck.js

CMD ["node", "dist/index.js"]
EOF
    echo "Created Dockerfile.nodejs"
}


# ============================================================================
# 2. DOCKERFILE FOR REACT APPLICATION
# ============================================================================

create_react_dockerfile() {
    cat > Dockerfile.react << 'EOF'
# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build application
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:1.24-alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from builder
COPY --from=build /app/dist /usr/share/nginx/html

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
EOF
    echo "Created Dockerfile.react"
}


# ============================================================================
# 3. DOCKERFILE FOR PYTHON APPLICATION
# ============================================================================

create_python_dockerfile() {
    cat > Dockerfile.python << 'EOF'
# Stage 1: Builder
FROM python:3.11-slim AS builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --user --no-cache-dir -r requirements.txt

# Stage 2: Runtime
FROM python:3.11-slim

WORKDIR /app

# Create non-root user
RUN useradd -m -u 1001 appuser

# Install runtime dependencies only
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy Python packages from builder
COPY --from=builder /root/.local /home/appuser/.local

# Copy application code
COPY app ./

# Set environment variables
ENV PATH=/home/appuser/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1

# Change ownership
RUN chown -R appuser:appuser /app

USER appuser

EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
EOF
    echo "Created Dockerfile.python"
}


# ============================================================================
# 4. DOCKER COMPOSE FOR FULL-STACK APPLICATION
# ============================================================================

create_docker_compose() {
    cat > docker-compose.yml << 'EOF'
version: '3.9'

services:
  # Frontend - React application
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: app_frontend
    ports:
      - "3000:80"
    environment:
      REACT_APP_API_URL: http://localhost:5000
    depends_on:
      - backend
    networks:
      - app_network
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/health"]
      interval: 30s
      timeout: 3s
      retries: 3

  # Backend - Node.js/Express application
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: app_backend
    ports:
      - "5000:3000"
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://app:password@postgres:5432/myapp
      REDIS_URL: redis://redis:6379
      JWT_SECRET: ${JWT_SECRET}
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - app_network
    volumes:
      - ./backend/logs:/app/logs
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "node", "healthcheck.js"]
      interval: 30s
      timeout: 3s
      retries: 3

  # PostgreSQL Database
  postgres:
    image: postgres:15-alpine
    container_name: app_postgres
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app_network
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    container_name: app_redis
    ports:
      - "6379:6379"
    networks:
      - app_network
    volumes:
      - redis_data:/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3
    command: redis-server --appendonly yes

  # MongoDB
  mongodb:
    image: mongo:6-alpine
    container_name: app_mongodb
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASSWORD}
    volumes:
      - mongo_data:/data/db
    networks:
      - app_network
    restart: unless-stopped

  # Nginx Reverse Proxy
  nginx:
    image: nginx:1.24-alpine
    container_name: app_nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
    depends_on:
      - frontend
      - backend
    networks:
      - app_network
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
  mongo_data:

networks:
  app_network:
    driver: bridge
EOF
    echo "Created docker-compose.yml"
}


# ============================================================================
# 5. DOCKER COMPOSE FOR DEVELOPMENT
# ============================================================================

create_docker_compose_dev() {
    cat > docker-compose.dev.yml << 'EOF'
version: '3.9'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.dev
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      NODE_ENV: development
      DATABASE_URL: postgresql://app:password@postgres:5432/myapp
    ports:
      - "5000:3000"
    command: npm run dev

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myapp
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
EOF
    echo "Created docker-compose.dev.yml"
}


# ============================================================================
# 6. NGINX CONFIGURATION
# ============================================================================

create_nginx_config() {
    cat > nginx.conf << 'EOF'
upstream backend {
    server backend:3000;
}

upstream frontend {
    server frontend:80;
}

server {
    listen 80;
    server_name _;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # API routes to backend
    location /api/ {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Health check endpoint
    location /health {
        proxy_pass http://backend;
        access_log off;
    }

    # Static files and frontend
    location / {
        proxy_pass http://frontend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOF
    echo "Created nginx.conf"
}


# ============================================================================
# 7. .DOCKERIGNORE FILE
# ============================================================================

create_dockerignore() {
    cat > .dockerignore << 'EOF'
node_modules
npm-debug.log
dist
build
.git
.gitignore
README.md
.env
.env.local
.DS_Store
.vscode
.idea
coverage
*.md
!README.md
.docker
.dockerignore
EOF
    echo "Created .dockerignore"
}


# ============================================================================
# 8. ENVIRONMENT VARIABLES FILE
# ============================================================================

create_env_file() {
    cat > .env.example << 'EOF'
# Database
POSTGRES_PASSWORD=secure_password_here
MONGO_PASSWORD=mongo_password_here

# JWT
JWT_SECRET=your_jwt_secret_key_here

# Application
NODE_ENV=production
LOG_LEVEL=info

# Sentry
SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0

# API Keys
API_KEY=your_api_key_here
EOF
    echo "Created .env.example"
}


# ============================================================================
# 9. DOCKER BUILD AND RUN COMMANDS
# ============================================================================

docker_build_commands() {
    cat << 'EOF'
# Build Docker image
docker build -t myapp:latest .
docker build -t myapp:1.0.0 -f Dockerfile.nodejs .

# Build with build args
docker build --build-arg NODE_ENV=production -t myapp:prod .

# List images
docker images

# Run container
docker run -d \
  -p 3000:3000 \
  -e DATABASE_URL=postgresql://user:pass@db:5432/myapp \
  --name myapp_container \
  myapp:latest

# Interactive mode
docker run -it myapp:latest /bin/bash

# Mount volumes
docker run -d \
  -v /path/on/host:/app/data \
  -v log_volume:/app/logs \
  myapp:latest

# Network
docker network create myapp_network
docker run -d --network myapp_network --name backend myapp:backend
docker run -d --network myapp_network --name frontend myapp:frontend

# View logs
docker logs -f myapp_container
docker logs --tail 100 myapp_container

# Execute command in running container
docker exec -it myapp_container npm run migrate

# Stop and remove
docker stop myapp_container
docker rm myapp_container
EOF
    echo "Docker commands:"
    cat << 'EOF'
EOF
}


# ============================================================================
# 10. DOCKER COMPOSE COMMANDS
# ============================================================================

docker_compose_commands() {
    cat << 'EOF'
# Start services
docker-compose up -d

# Start with specific file
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose logs -f backend
docker-compose logs --tail=50 -f

# Stop services
docker-compose stop
docker-compose down        # Remove containers
docker-compose down -v     # Remove containers and volumes

# Rebuild images
docker-compose build
docker-compose build --no-cache

# Run one-off command
docker-compose exec backend npm run migrate
docker-compose run --rm backend npm run seed

# Scale services
docker-compose up -d --scale worker=3

# Health check
docker-compose ps
EOF
}


# ============================================================================
# 11. IMAGE OPTIMIZATION
# ============================================================================

optimize_image_size() {
    cat << 'EOF'
# Optimization Techniques:

1. Multi-stage builds:
   - Use separate stages for build and runtime
   - Only copy necessary artifacts to final stage
   - Reduces image size significantly

2. Use minimal base images:
   - alpine: Very small, ~5-10MB
   - distroless: No package manager, very secure
   - busybox: Tiny, ~1MB

3. Clean up in RUN commands:
   - apt-get update && apt-get install && apt-get clean
   - npm ci instead of npm install
   - Remove build dependencies in separate layer

4. Combine RUN commands:
   - Each RUN creates a layer
   - Combine commands to reduce layers

5. Use .dockerignore:
   - Exclude unnecessary files from build context

# Example optimized Dockerfile:
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "index.js"]

# Image size comparison:
# Node.js full: ~900MB
# Node.js alpine: ~165MB  
# Distroless: ~95MB
EOF
}


# ============================================================================
# 12. SECURITY BEST PRACTICES
# ============================================================================

security_best_practices() {
    cat << 'EOF'
1. Run as non-root user:
   RUN addgroup -g 1001 -S nodejs
   RUN adduser -S nodejs -u 1001
   USER nodejs

2. Don't include secrets in image:
   - Use environment variables
   - Use Docker secrets for Swarm
   - Use secret management solutions (Vault)

3. Scan for vulnerabilities:
   docker scan myapp:latest
   trivy image myapp:latest

4. Use minimal base images:
   - Reduces attack surface
   - Fewer packages = fewer vulnerabilities

5. Set resource limits:
   docker run -m 512m --cpus 1 myapp:latest

6. Use read-only filesystems:
   docker run --read-only myapp:latest

7. Don't run services as root:
   - Create dedicated user
   - Restrict permissions

8. Keep base images updated:
   - Rebuild with latest base image
   - Monitor for security updates

9. Use HEALTHCHECK:
   - Container self-healing
   - Orchestrators can restart unhealthy containers

10. Network isolation:
    - Create dedicated networks
    - Control traffic between containers
EOF
}


# ============================================================================
# 13. LOGGING BEST PRACTICES
# ============================================================================

configure_logging() {
    cat << 'EOF'
# Docker logging drivers
docker run --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 myapp

# Docker Compose logging
services:
  app:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

# View logs
docker logs <container>
docker logs -f <container>
docker logs --tail 100 <container>

# Log to files
docker logs <container> > output.log 2>&1

# Structured logging in application
# Use JSON format for better parsing
# Include timestamps, log levels, service name
EOF
}


# ============================================================================
# 14. MULTI-ARCHITECTURE BUILDS
# ============================================================================

multiarch_builds() {
    cat << 'EOF'
# Build for multiple architectures
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t myapp:latest \
  --push .

# Build for specific architecture
docker buildx build \
  --platform linux/arm64 \
  -t myapp:arm64 .

# View available builders
docker buildx ls

# Create builder for multi-arch
docker buildx create --name mybuilder
docker buildx use mybuilder
EOF
}


# ============================================================================
# 15. CI/CD DOCKER EXAMPLES
# ============================================================================

github_actions_docker() {
    cat > .github/workflows/docker.yml << 'EOF'
name: Docker Build and Push

on:
  push:
    branches: [main]
    tags: ['v*']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: ${{ secrets.DOCKER_USERNAME }}/myapp:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: ${{ secrets.DOCKER_USERNAME }}/myapp:latest
          format: 'sarif'
          output: 'trivy-results.sarif'

      - name: Upload Trivy results to GitHub Security tab
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'
EOF
    echo "Created GitHub Actions Docker workflow"
}


# ============================================================================
# MAIN EXECUTION
# ============================================================================

main() {
    echo "=========================================="
    echo "Week 15: Docker & DevOps Examples"
    echo "=========================================="
    echo ""

    # Create all examples
    create_nodejs_dockerfile
    create_react_dockerfile
    create_python_dockerfile
    create_docker_compose
    create_docker_compose_dev
    create_nginx_config
    create_dockerignore
    create_env_file
    github_actions_docker

    echo ""
    echo "=========================================="
    echo "Created Docker Examples:"
    echo "=========================================="
    echo "✓ Dockerfile.nodejs - Node.js multi-stage build"
    echo "✓ Dockerfile.react - React application with nginx"
    echo "✓ Dockerfile.python - Python FastAPI application"
    echo "✓ docker-compose.yml - Production docker-compose"
    echo "✓ docker-compose.dev.yml - Development docker-compose"
    echo "✓ nginx.conf - Nginx reverse proxy configuration"
    echo "✓ .dockerignore - Files to exclude from build"
    echo "✓ .env.example - Environment variables template"
    echo "✓ .github/workflows/docker.yml - CI/CD workflow"
    echo ""
    echo "=========================================="
    echo "Useful Commands:"
    echo "=========================================="
    docker_compose_commands | head -20
    echo ""
    echo "Run: docker-compose up -d"
    echo "Check: docker-compose ps"
    echo "Logs: docker-compose logs -f backend"
    echo "Stop: docker-compose down"
}

# Run main function
main "$@"