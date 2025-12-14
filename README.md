# WebSocket Client–Server Project 🚀

This repository contains a **full-stack WebSocket-based application** with a **React (Vite) frontend** and a **Node.js + Express + WebSocket backend**, fully **Dockerized** for easy setup and deployment.

## 📁 Project Structure

```text
project-root/
├── client/                 # React (Vite) frontend
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node.js + WebSocket backend
│   ├── index.js
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml      # Runs client & server together
├── .dockerignore
└── README.md


## 🧰 Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js, Express, WebSocket (`ws`)
- **Containerization:** Docker & Docker Compose

## ⚙️ Prerequisites

Make sure you have the following installed:

- **Git**
- **Docker** (v20+ recommended)
- **Docker Compose** (comes with Docker Desktop)

Verify installation:
```bash
docker --version
docker compose version
```

### 🚀 Getting Started (Recommended: Docker)

1️⃣ Clone the repository
```
git clone <your-repo-url>
cd <project-folder>
```

2️⃣ Build & run the project using Docker

From the project root:
```
docker compose up --build
```

This will:

-Build the React frontend

-Build the Node.js WebSocket server

-Start both containers

3️⃣ Access the application

Service	URL
->**React Client	http://localhost:3000**

->**WebSocket Server	ws://localhost:4000**

🔁 WebSocket Flow (High Level)

-React app connects to WebSocket server on load

-Server accepts connection

-User sends a message from frontend

-Message is sent to backend via WebSocket

-Server responds / broadcasts message

-Frontend receives and displays it

## 🧪 Run Without Docker (Optional)
▶ Start Server
```
cd server
npm install
npm run dev
```


Server runs on:

**http://localhost:4000**

▶ Start Client
```
cd client
npm install
npm run dev
```

Client runs on:

**http://localhost:5173**


## ⚠️ When running locally, make sure WebSocket URL is:

**ws://localhost:4000**

## 🐳 Docker Notes

-Docker uses Linux, so file names & imports are case-sensitive

-Always keep import paths and file names consistent

-node_modules are NOT committed (handled inside Docker)

-🔐 Environment Variables (Optional)

## 📄 License

This project is open-source and free to use.

## 🙌 Author

Vinayak Jat

⭐ If you found this project helpful, consider starring the repository!

### ✅ Next Step
```bash
git add README.md
git commit -m "Add project setup and Docker instructions"
git push
```
