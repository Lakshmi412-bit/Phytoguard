# 🌿 PhytoGuard – Tomato Leaf Disease Detection System

## 📌Project Overview
PhytoGuard is a web-based application that helps identify possible tomato plant diseases from a leaf image.
The system provides detailed information about the detected disease, including:

Symptoms
Effects
Solutions
Prevention methods
Recommended fertilizers

Currently, the system demonstrates disease identification using predefined disease data and simulated detection logic.

## 🚀 Technologies Used
🖥️ Frontend
React.js,
TypeScript (TSX),
Vite,
React Router DOM,
Tailwind CSS

⚙️ Backend
Node.js,
Hono Framework,
CORS Middleware

## 🧠 Dataset Reference
The disease categories and information in this project are based on the PlantVillage Tomato Leaf Dataset available on Kaggle.
🔗 Dataset Link:
https://www.kaggle.com/code/mohammedhamzamoawad/tomato-leaf-disease-detection/input

📊 Dataset Includes:
Bacterial Spot,
Early Blight,
Late Blight,
Leaf Mold,
Septoria Leaf Spot,
Target Spot,
Yellow Leaf Curl Virus,
Tomato Mosaic Virus,
Healthy Leaf

These classes are used as reference categories in the system.

# Welcome to your PhytoGuard project

## Project info
## 💻 How to Run the Project Locally (Frontend + Backend)
Make sure you have Node.js and npm installed.

### Step 1: Clone the Repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
🖥️ Run Frontend (React)
### Step 2: Go to Frontend Folder
cd frontend
### Step 3: Install Dependencies
npm install
### Step 4: Start Frontend Server
npm run dev

👉 Frontend will run on:
http://localhost:5173

⚙️ Run Backend (Node.js + Hono)
### Step 5: Open New Terminal & Go to Backend Folder
cd backend
### Step 6: Install Dependencies
npm install
### Step 7: Start Backend Server
npm run dev

👉 Backend will run on (example):
http://localhost:8787

# 🌟 Features
🌱 Tomato disease detection (simulated),
📊 Detailed disease information (Symptoms, Effects, Solutions),
🖼️ Image upload (drag & drop supported),
🖨️ Printable report generation,
📱 Responsive UI

# 🔮 Future Enhancements
Integration with real Machine Learning models,
Backend database (MongoDB),
Real-time disease prediction using AI,
Mobile app support

