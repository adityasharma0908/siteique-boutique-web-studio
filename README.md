# SITEIQUE

### Boutique Digital Studio

A modern full-stack digital studio platform built for creative brands and businesses.

Siteique combines a polished React frontend with a secure backend API, PostgreSQL database, JWT authentication, and an admin dashboard for managing project inquiries.

---

## 🌐 Live Project

**Live Website:**  
https://siteique-boutique-web-studio.vercel.app

**Admin Dashboard:**  
https://siteique-boutique-web-studio.vercel.app/admin/login

---

## ✨ Features

### Client Website
- Modern boutique studio landing page
- Responsive design
- Services and studio information
- Project inquiry/contact form
- Smooth animations and interactions
- Mobile-friendly interface

### Inquiry Management
- Client inquiries stored in PostgreSQL
- Inquiry status tracking
- Admin dashboard for managing submissions
- Status workflow:
  - `NEW`
  - `CONTACTED`
  - `IN_PROGRESS`
  - `COMPLETED`

### Authentication
- Admin login system
- Password hashing using bcrypt
- JWT-based authentication
- Protected admin API routes
- Protected admin dashboard

---

## 🏗️ Architecture

```text
                SITEIQUE
                   │
        ┌──────────┴──────────┐
        │                     │
     Frontend              Backend
        │                     │
 React + TypeScript      Node.js + Express
        │                     │
        │                  REST API
        │                     │
        │                  Prisma ORM
        │                     │
        └──────────────┬──────┘
                       │
                  PostgreSQL
                    Supabase
                       │
                Protected Admin
                   Dashboard
```

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Custom CSS / Design System
- GSAP
- React Router

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- bcryptjs
- JSON Web Tokens (JWT)
- CORS
- dotenv

### Deployment
- Vercel — Frontend
- Render — Backend
- Supabase — PostgreSQL Database

---

## 📁 Project Structure

```text
siteique-boutique-web-studio/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   ├── package.json
│   ├── vite.config.ts
│   └── vercel.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── server.ts
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

## 🔐 Authentication Flow

The admin authentication system follows this flow:

```text
Admin Login
     │
     ▼
POST /api/auth/login
     │
     ▼
Verify credentials
     │
     ▼
bcrypt password comparison
     │
     ▼
JWT token generated
     │
     ▼
Token stored by frontend
     │
     ▼
Protected API requests
     │
     ▼
Admin Dashboard
```

Protected inquiry endpoints require a valid JWT Bearer token.

---

## 🔌 API Endpoints

### Authentication

#### Login

```http
POST /api/auth/login
```

Used by the admin dashboard to authenticate an administrator.

### Inquiries

#### Create Inquiry

```http
POST /api/inquiries
```

Public endpoint used by the website contact form.

#### Get Inquiries

```http
GET /api/inquiries
Authorization: Bearer <token>
```

Returns submitted inquiries for authenticated administrators.

#### Update Inquiry

```http
PATCH /api/inquiries/:id
Authorization: Bearer <token>
```

Updates the status of an inquiry.

---

## 🗄️ Database

Siteique uses **PostgreSQL** with **Prisma ORM**.

### User

Stores administrator authentication information.

```text
User
├── id
├── email
├── password
└── createdAt
```

### Inquiry

Stores project inquiries submitted through the website.

```text
Inquiry
├── id
├── name
├── email
├── company
├── projectType
├── budget
├── message
├── status
└── createdAt
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adityasharma0908/siteique-boutique-web-studio.git
cd siteique-boutique-web-studio
```

### 2. Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run locally using Vite.

### 3. Run the Backend

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

The backend API runs on the configured server port.

---

## 🔑 Environment Variables

### Frontend

Create:

```text
frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:5000
```

### Backend

Create:

```text
backend/.env
```

Add:

```env
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

Never commit environment files or secret values to GitHub.

---

## 📦 Production Deployment

### Frontend

The React frontend is deployed using **Vercel**.

Vercel is configured with:

```text
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
```

### Backend

The Express API is deployed using **Render**.

### Database

The production PostgreSQL database is hosted using **Supabase**.

---

## 🎯 Project Highlights

This project demonstrates experience with:

- Full-stack web application development
- React and TypeScript
- REST API development
- Database design
- Prisma ORM
- PostgreSQL
- Authentication and authorization
- JWT
- Password hashing
- Protected API routes
- Admin dashboard development
- Frontend/backend integration
- Cloud deployment
- Git and GitHub
- Responsive UI development

---

## 🔮 Future Improvements

Potential future improvements include:

- HTTP-only cookie-based authentication
- Role-based access control
- Inquiry deletion and bulk management
- Dashboard analytics
- Email notifications for new inquiries
- Image/content management
- Automated testing
- Rate limiting and stricter API security

---

## 👨‍💻 Developer

**Aditya Sharma**

Computer Science Engineering Student

1000019452@dit.edu.in
adityaksharma0908@gmail.com

DIT University Dehradun
