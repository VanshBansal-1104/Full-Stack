# AWS Full Stack App Deployment (React + Node.js + MongoDB)

This archive contains a minimal scaffold and related files from a deployment guide to run a React frontend and Node.js/Express backend behind an AWS Application Load Balancer (ALB).  

## Included
- backend/app.js
- backend/package.json
- frontend/src/App.js
- frontend/.env.production
- load-test.yml
- This README with high-level instructions.

## Quick notes
- Replace `REACT_APP_API_URL` in `.env.production` with your ALB DNS or Route53 domain.
- Fill in `MONGODB_URI` in backend `.env` on your EC2 instances (or use Atlas).
- Use systemd service and nginx configs from the guide when deploying to EC2.
