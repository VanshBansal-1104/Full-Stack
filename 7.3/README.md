# Real-time Chat (7.3)

This project contains a simple Socket.io real-time chat demo.

Structure:
- `backend/` - Express + Socket.io server (port 4000)
- `frontend/` - Vite + React app (default Vite port 5173)

How to run:

Open two terminals (or more) and run the backend and frontend separately.

Backend:
```powershell
cd "d:\Semester 5\Full Stack\7.3\backend"
npm install
npm start
```

Frontend:
```powershell
cd "d:\Semester 5\Full Stack\7.3\frontend"
npm install
npm run dev
```

Then open the frontend URL (usually http://localhost:5173/) in multiple browser windows, join with different names and send messages. Messages should appear in real time across clients.

Notes:
- The server uses a permissive CORS policy for demo convenience. For production, restrict origins.
- If you want the frontend to connect to a remote host, set environment variable `VITE_SOCKET_URL` before starting Vite, e.g.
  ```powershell
  $env:VITE_SOCKET_URL = 'https://example.com'
  npm run dev
  ```
