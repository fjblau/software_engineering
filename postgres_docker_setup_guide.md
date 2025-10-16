# PostgreSQL with Docker - Beginner's Guide

A complete guide to installing and running PostgreSQL using Docker, including pgAdmin for database management.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [What is Docker and Why Use It?](#what-is-docker-and-why-use-it)
3. [Installing Docker](#installing-docker)
4. [Running PostgreSQL in Docker](#running-postgresql-in-docker)
5. [Installing and Using pgAdmin](#installing-and-using-pgadmin)
6. [Using Docker Compose (Recommended)](#using-docker-compose-recommended)
7. [Verification Steps](#verification-steps)
8. [Useful Commands](#useful-commands)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- A computer with at least 4GB of RAM
- Administrator/sudo access on your machine
- Internet connection for downloading Docker and images
- A code editor (VS Code, etc.)

---

## What is Docker and Why Use It?

**Docker** is a containerization platform that allows you to run applications (like PostgreSQL) in isolated environments without installing them directly on your computer.

**Benefits:**
- No need to install PostgreSQL directly on your machine
- Easy to share consistent database environments with teammates
- Can run multiple versions of PostgreSQL simultaneously
- Easy cleanup - just remove the container
- Perfect for development environments

---

## Installing Docker

### macOS

1. Visit [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop)
2. Click "Download for Mac"
3. Choose the appropriate version:
   - **Apple Silicon** (M1/M2/M3 chips): Download "Apple Silicon"
   - **Intel Mac**: Download "Intel Chip"
4. Open the downloaded `.dmg` file
5. Drag Docker.app to Applications folder
6. Open Applications → Docker.app
7. Enter your password when prompted
8. Wait for Docker to finish starting (you'll see the whale icon in the menu bar)

### Windows

1. Visit [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)
2. Click "Download for Windows"
3. Run the installer
4. Follow the installation wizard
5. You may need to enable WSL 2 (Windows Subsystem for Linux)
6. Restart your computer when prompted
7. Open Docker Desktop

### Linux (Ubuntu/Debian)

```bash
# Update package manager
sudo apt update

# Install Docker
sudo apt install docker.io -y

# Start Docker service
sudo systemctl start docker

# Enable Docker to run on startup
sudo systemctl enable docker

# Verify installation
docker --version
```

### Verify Docker Installation

Open Terminal/Command Prompt and run:

```bash
docker --version
docker run hello-world
```

You should see version information and a "Hello from Docker!" message.

---

## Running PostgreSQL in Docker

### Quick Start (Simple Method)

Run this command in your terminal:

```bash
docker run --name my-postgres \
  -e POSTGRES_PASSWORD=mypassword \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_DB=mydatabase \
  -p 5432:5432 \
  -d \
  postgres:15
```

**Explanation:**
- `--name my-postgres`: Container name
- `-e POSTGRES_PASSWORD=mypassword`: Set database password
- `-e POSTGRES_USER=myuser`: Set username
- `-e POSTGRES_DB=mydatabase`: Create initial database
- `-p 5432:5432`: Map port 5432 from container to your machine
- `-d`: Run in background (detached mode)
- `postgres:15`: PostgreSQL version 15

**Connection Details:**
- Host: `localhost` or `127.0.0.1`
- Port: `5432`
- Username: `myuser`
- Password: `mypassword`
- Database: `mydatabase`

### Stop the Container

```bash
docker stop my-postgres
```

### Start the Container Again

```bash
docker start my-postgres
```

### Remove the Container

```bash
docker rm my-postgres
```

---

## Installing and Using pgAdmin

pgAdmin is a web-based GUI for managing PostgreSQL databases.

### Option 1: Run pgAdmin in Docker

```bash
docker run --name pgadmin \
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com \
  -e PGADMIN_DEFAULT_PASSWORD=admin \
  -p 5050:80 \
  -d \
  dpage/pgadmin4
```

### Access pgAdmin

1. Open your web browser
2. Go to `http://localhost:5050`
3. Login with:
   - Email: `admin@example.com`
   - Password: `admin`

### Connect PostgreSQL to pgAdmin

1. In pgAdmin, go to **Object** → **Create** → **Server**
2. Fill in the form:
   - **Name**: Give your server a name (e.g., "My Local DB")
   - **Host name/address**: `host.docker.internal` (on macOS/Windows) or `172.17.0.1` (on Linux)
   - **Port**: `5432`
   - **Username**: `myuser`
   - **Password**: `mypassword`
3. Click **Save**
4. You should now see your PostgreSQL server in the left sidebar

**Note for Linux Users:** If `host.docker.internal` doesn't work, use the Docker bridge IP address. Find it with:
```bash
docker inspect my-postgres | grep IPAddress
```

---

## Using Docker Compose (Recommended)

Docker Compose allows you to define and run multiple containers with one command. This is the professional approach!

### Step 1: Create `docker-compose.yml`

Create a file named `docker-compose.yml` in your project directory:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    container_name: capstone-postgres
    environment:
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypassword
      POSTGRES_DB: mydatabase
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - capstone-network

  pgadmin:
    image: dpage/pgadmin4
    container_name: capstone-pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
    depends_on:
      - postgres
    networks:
      - capstone-network

volumes:
  postgres_data:

networks:
  capstone-network:
    driver: bridge
```

### Step 2: Run Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Stop and remove all data
docker-compose down -v
```

### Step 3: Connect pgAdmin to PostgreSQL

In pgAdmin, create a new server with:
- **Host name/address**: `postgres` (service name from docker-compose.yml)
- **Port**: `5432`
- **Username**: `myuser`
- **Password**: `mypassword`

---

## Verification Steps

### Check if PostgreSQL is Running

```bash
docker ps
```

You should see your PostgreSQL container in the list.

### Connect to PostgreSQL Using Command Line

```bash
# Install psql if needed (or use docker exec)
docker exec -it my-postgres psql -U myuser -d mydatabase

# You should see the psql prompt: mydatabase=#
# Try a simple command:
mydatabase=# SELECT version();
mydatabase=# \q  # Exit
```

### Verify pgAdmin Access

1. Open browser: `http://localhost:5050`
2. Login and verify you can see PostgreSQL server
3. Create a test database or table to confirm everything works

---

## Useful Commands

### Docker Container Management

```bash
# List all running containers
docker ps

# List all containers (including stopped)
docker ps -a

# View container logs
docker logs my-postgres

# Follow logs in real-time
docker logs -f my-postgres

# Execute command in container
docker exec -it my-postgres psql -U myuser -d mydatabase

# Stop container
docker stop my-postgres

# Start container
docker start my-postgres

# Remove container
docker rm my-postgres

# Remove image (be careful!)
docker rmi postgres:15
```

### Docker Compose Commands

```bash
# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# Stop and remove volumes (delete all data!)
docker-compose down -v

# View logs
docker-compose logs

# Rebuild images
docker-compose up -d --build

# Execute command in service
docker-compose exec postgres psql -U myuser -d mydatabase
```

### PostgreSQL Commands (Inside psql)

```sql
-- List all databases
\l

-- Connect to database
\c mydatabase

-- List all tables
\dt

-- Create a table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

-- Insert data
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

-- Query data
SELECT * FROM users;

-- Exit psql
\q
```

---

## Troubleshooting

### Port Already in Use

**Problem:** Error like "Bind for 0.0.0.0:5432 failed: port is already allocated"

**Solution:**

```bash
# Find what's using port 5432
lsof -i :5432

# Or use a different port
docker run --name my-postgres \
  -e POSTGRES_PASSWORD=mypassword \
  -p 5433:5432 \
  -d \
  postgres:15
```

### Cannot Connect to PostgreSQL

**Problem:** "Could not connect to database"

**Solution:**
1. Verify container is running: `docker ps`
2. Check container logs: `docker logs my-postgres`
3. For macOS/Windows users connecting from pgAdmin, use `host.docker.internal`
4. For Linux users, use the container IP address

### pgAdmin Cannot Find PostgreSQL

**Problem:** Connection error in pgAdmin

**Solution:**
1. If using Docker Compose: Use service name `postgres` as hostname
2. If running separately: Use `host.docker.internal` (macOS/Windows) or Docker bridge IP (Linux)
3. Verify credentials match what you set in the container
4. Ensure both containers are running: `docker ps`

### Docker Service Not Starting

**Problem:** Docker won't start on macOS/Windows

**Solution:**
1. Restart your computer
2. Reinstall Docker
3. Check Docker Desktop preferences/settings
4. Ensure you have sufficient disk space

### Slow Performance

**Problem:** Docker containers running slowly

**Solution:**
1. Increase Docker's allocated resources:
   - macOS: Docker Desktop → Preferences → Resources → increase CPU/Memory
   - Windows: Docker Desktop → Settings → Resources → increase CPU/Memory
2. Allocate at least 2GB of RAM to Docker

---

## Next Steps

1. **Set up your project** with this Docker environment
2. **Create database schemas** for your application
3. **Learn SQL** to interact with your database
4. **Connect from Node.js or Python** using database drivers:
   - Node.js: `npm install pg` (PostgreSQL driver)
   - Python: `pip install psycopg2` (PostgreSQL driver)

---

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)
- [pgAdmin Documentation](https://www.pgadmin.org/docs/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## Summary

| Task | Command |
|------|---------|
| Install Docker | Visit [docker.com](https://docker.com) |
| Run PostgreSQL | `docker run --name my-postgres -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres:15` |
| Run pgAdmin | `docker run --name pgadmin -e PGADMIN_DEFAULT_EMAIL=admin@example.com -p 5050:80 -d dpage/pgadmin4` |
| Access pgAdmin | `http://localhost:5050` |
| Check if running | `docker ps` |
| Stop everything | `docker-compose down` |

---

**Happy coding!** 🐘🐳