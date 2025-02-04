MangaVerse 📚🎴

MangaVerse is an online manga shop where users can explore, purchase, and manage their manga collections. The platform offers seamless navigation, secure payments, and an admin dashboard for managing products, users, and orders.
🔗 Live Demo

🔗 MangaVerse Deployment Link (Add your deployed link here)
Features

Browse and buy manga by category
User authentication and authorization
Secure payment integration (SurjoPay)
Admin panel for managing products, users, and orders
User order management
Fully responsive UI with modern design

Folder Structure

MangaVerse/
│── client/ # Frontend (React, Vite)
│ ├── src/
│ │ ├── assets/ # Static assets (images, icons)
│ │ ├── components/ # Reusable UI components
│ │ ├── hooks/ # Custom hooks
│ │ ├── pages/ # App pages
│ │ ├── redux/ # Redux store & API calls
│ │ ├── types/ # TypeScript types
│ │ ├── utils/ # Helper functions
│ │ ├── App.tsx # Main app file
│ │ ├── main.tsx # Entry point
│ ├── public/ # Public files
│ ├── index.html # Main HTML file
│ ├── package.json # Dependencies
│
│── server/ # Backend (Node.js, Express, MongoDB)
│ ├── src/
│ │ ├── config/ # Configuration files (DB, env)
│ │ ├── controllers/ # Route controllers
│ │ ├── middlewares/ # Middleware functions
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # API routes
│ │ ├── utils/ # Utility functions
│ │ ├── server.ts # Main backend entry
│ ├── package.json # Backend dependencies
│
│── README.md # Project documentation
│── .gitignore # Files to ignore in Git

Installation Guide

Clone the repository

    git clone https://github.com/SadikRa/MangaVerse_Server_A-4.git

Backend Setup

cd server
npm install
npm run dev

Frontend Setup

cd client
npm install
npm run dev

Installed NPM Packages
Frontend (Client Side)

"@reduxjs/toolkit": "^1.9.5",
"axios": "^1.3.5",
"daisyui": "^3.6.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^4.8.0",
"react-redux": "^8.1.1",
"react-router-dom": "^6.14.2",
"react-scroll-parallax": "^3.2.1",
"react-toastify": "^9.1.1",
"swiper": "^9.4.1",
"tailwindcss": "^3.3.3",
"typescript": "^5.1.6",
"vite": "^4.3.9"

Backend (Server Side)

"bcryptjs": "^2.4.3",
"cors": "^2.8.5",
"dotenv": "^16.3.1",
"express": "^4.18.2",
"express-async-handler": "^1.2.0",
"jsonwebtoken": "^9.0.1",
"mongoose": "^7.3.2",
"multer": "^1.4.5-lts.1",
"zod": "^3.21.4"

🛠 API Endpoints
Authentication
Method Endpoint Description
POST /api/auth/signup User registration
POST /api/auth/login User login
GET /api/auth/me Get current user profile
User Management
Method Endpoint Description
GET /api/users/ Get all users (Admin only)
GET /api/users/:id Get user by ID
PATCH /api/users/:id Update user profile
DELETE /api/users/:id Delete user (Admin only)
Product Management
Method Endpoint Description
GET /api/products/ Get all products
GET /api/products/:id Get product by ID
POST /api/products/ Add new product (Admin)
PATCH /api/products/:id Update product (Admin)
DELETE /api/products/:id Delete product (Admin)
Order Management
Method Endpoint Description
GET /api/orders/ Get all orders (Admin)
GET /api/orders/email/:email Get user orders
POST /api/orders/ Create new order
PATCH /api/orders/:id Update order status
DELETE /api/orders/:id Delete order
Payment (SurjoPay)
Method Endpoint Description
POST /api/payment/initiate Initiate payment
GET /api/payment/status Check payment status
Environment Variables (.env)

Create a .env file in the server directory and add:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
SURJOPAY_API_KEY=your_surjopay_key

Roles & Permissions
Role Permissions
Admin Manage users, products, orders
User Browse & order manga
Deployment Guide
Backend Deployment (Vercel / Render)

    Push your server code to GitHub
    Connect your GitHub repo to Vercel or Render
    Set environment variables (.env) in the settings
    Deploy

Frontend Deployment (Vercel / Netlify)

    Push your client code to GitHub
    Connect your repo to Vercel or Netlify
    Set the VITE_BACKEND_URL environment variable
    Deploy

Contact & Support

Email: sadikrahman494@gmail.com
Website: your-website.com
Enjoy reading & shopping on MangaVerse!
