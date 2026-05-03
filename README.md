🌍 Travel Memory Application Deployment (MERN + AWS)

A comprehensive documentation of the end-to-end deployment of the TravelMemory application on AWS, demonstrating a highly available and secure 3-tier architecture with every implementation step verified.

About TravelMemory

TravelMemory is a full-stack MERN (MongoDB, Express, React, Node.js) application designed for travel enthusiasts to document and cherish their journeys. It serves as a digital travel journal where users can store details about their trips, including the places they visited, the hotels they stayed at, and the unique experiences they had.

The application is built to be lightweight, responsive, and easy to use, providing a seamless way to preserve travel memories forever.

Experience Journal: Capture detailed notes about your trips, including start/end dates and personal reflections.
Trip Categorization: Organize memories by trip type, such as Leisure, Backpacking, or Business.
Expense Tracking: Keep a record of the total cost associated with each journey.
Visual Memories: Support for attaching images to each travel entry (via URL).
Featured Experiences: Highlight specific trips on the homepage for quick access.
Responsive Design: A user-friendly interface that works across various devices.

Deployment Quick-Start

To deploy this application for your own use, follow these high-level steps:

Cloud Infrastructure: Set up a custom VPC with Public and Private subnets. Configure Security Groups to allow traffic on ports 80 (HTTP), 443 (HTTPS), and 3001 (Backend API).

Database: Create a MongoDB Atlas cluster and obtain your connection string.

Backend Tier:

Launch an EC2 instance in the Private subnet.
Clone the repository and configure the .env file in the backend/ directory with your MONGO_URI and PORT=3001.
Install dependencies and start the Node.js server (using PM2 for persistence).
Frontend Tier:

Launch an EC2 instance in the Public subnet.
Update frontend/src/url.js to point to your backend API.
Generate a production build (npm run build).
Configure Nginx as a reverse proxy to serve the build files and forward API requests.

Traffic Management:
Set up an Application Load Balancer (ALB) to distribute traffic.
Configure Target Groups and Health Checks.

Domain & Security:
Point your custom domain to the ALB DNS using Cloudflare (CNAME).
Provision an SSL certificate via AWS Certificate Manager (ACM) for HTTPS.

Architecture Overview
<img width="953" height="411" alt="TravelMemory Architecture drawio" src="https://github.com/user-attachments/assets/04cc7e44-b7d4-49b9-a250-9dca6a7850c6" />

🎯 Objectives

Deploy backend using Node.js on EC2
Deploy frontend using React with Nginx
Connect frontend and backend
Implement Load Balancer for scalability
Configure custom domain using Cloudflare


🛠️ Tech Stack

Frontend: React.js

Backend: Node.js + Express

Web Server: Nginx

Cloud: AWS EC2

DNS: Cloudflare

Version Control: GitHub



🚀 Deployment Steps

1. Clone Repository
git clone <UnpredictablePrashant>cd TravelMemory


⚙️ 2. Backend Setup

### Step 1: Connect to EC2
bash ssh -i Travel-memory-Key.pem ubuntu@<EC2-IP> 

### Step 2: Clone Repository
bash git clone <your-repo-link> cd Travel-Memory-New/backend 

### Step 3: Install Dependencies
bash npm install 

---

## 🔐 3. Environment Configuration

Create .env file:

env PORT=3000 MONGO_URI=your_mongodb_connection_string 

---

## 🔗 4. MongoDB Connection

Created conn.js:

javascript const mongoose = require('mongoose');  mongoose.connect(process.env.MONGO_URI) .then(() => console.log("MongoDB Connected")) .catch(err => console.log(err)); 

---

## 🧩 5. Backend Structure

backend/ ├── index.js ├── conn.js ├── models/ ├── controllers/ ├── routes/ └── .env

---

## 🌐 6. API Implementation

### Routes:
•⁠  ⁠GET / → Check server
•⁠  ⁠GET /trip → Fetch trips
•⁠  ⁠POST /trip → Add trip

---

## ▶️ 7. Running Backend with PM2

bash pm2 start index.js pm2 save pm2 list 

---

## 🔍 8. Testing API

bash curl http://localhost:3000/ curl http://localhost:3000/trip 

---

## 🌍 9. Nginx Setup (Reverse Proxy)

Configured Nginx to route public traffic to backend:

nginx server {     listen 80;      location / {         proxy_pass http://localhost:3000;     } } 

Restart Nginx:
bash sudo systemctl restart nginx 

10 . Create AMI


Go to EC2 → Instance → Actions → Create Image


Save AMI for scaling



11. Create Target Group


Protocol: HTTP


Port: 80


Register EC2 instances



12. Create Load Balancer


Type: Application Load Balancer


Attach Target Group


Enable HTTP (port 80)



13. Cloudflare Domain Setup


Add domain in Cloudflare


Create records:


TypeNameValueA@EC2 Public IPCNAMEwwwLoad Balancer DNS

📸 Screenshots Included


EC2 instance running


Nginx welcome page


Frontend deployed


Load Balancer configuration


Cloudflare DNS setup



🧠 Architecture Overview


User → Cloudflare → Load Balancer → EC2 Instances → Backend


Nginx serves frontend and routes API calls



📦 Deliverables
✅ Live application on EC2
✅ GitHub repository
✅ Documentation
✅ Architecture diagram

🔐 Best Practices Followed


Security Groups configured


Load balancing for scalability


Environment variables used


Reverse proxy via Nginx




🧭 2. DRAW.IO ARCHITECTURE DIAGRAM (VERY IMPORTANT)
Open: https://app.diagrams.net/
👉 Add these components:
User (Browser)   ↓Cloudflare (DNS)   ↓Application Load Balancer   ↓EC2 Instance 1 (Nginx + React + Node)EC2 Instance 2 (optional for scaling)   ↓Backend API   ↓MongoDB (optional mention)

🎯 Diagram Layout
Use boxes like:
[ User ]   ↓[ Cloudflare DNS ]   ↓[ Load Balancer ]   ↓[ EC2 Instance ]   ├── Nginx   ├── React App   └── Node Backend

🟢 Tip:
Use:


Blue → Frontend


Green → Backend


Orange → AWS



📸 3. REQUIRED SCREENSHOTS
Take screenshots of:


EC2 instance running


Nginx working (Welcome page)


App running in browser


Load balancer dashboard


Target group healthy


Cloudflare DNS setup


GitHub repo



📦 4. FINAL SUBMISSION CHECKLIST
Before submitting:
✅ GitHub repo working
✅ README added
✅ Screenshots added (in /images)
✅ Architecture diagram exported (PNG)
✅ App accessible via:


## ⚠️ 12. Issues Faced & Fixes

### Issue 1: 502 Bad Gateway
•⁠  ⁠Cause: Backend not running  
•⁠  ⁠Fix: Restarted using PM2  

### Issue 2: Syntax Errors
•⁠  ⁠Cause: Incorrect JavaScript syntax  
•⁠  ⁠Fix: Corrected code and restarted server  

### Issue 3: Route Errors
•⁠  ⁠Cause: Improper route setup  
•⁠  ⁠Fix: Fixed routing and controller connections  

---

## ✅ 13. Final Output

•⁠  ⁠Backend running successfully on EC2  
•⁠  ⁠MongoDB connected  
•⁠  ⁠API responding correctly  
•⁠  ⁠Accessible via public IP  

---

## 🎯 14. Conclusion
The Travel Memory application was successfully deployed using AWS EC2, MongoDB Atlas, PM2, and Nginx.  
All core functionalities are working as expected.

---

## 📎 15. Future Improvements
•⁠  ⁠Add authentication (JWT)  
•⁠  ⁠Improve UI/UX  
•⁠  ⁠Use domain + HTTPS  
•⁠  ⁠Add image upload support
```
