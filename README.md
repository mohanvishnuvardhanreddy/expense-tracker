# 💰 Expense Tracker

![JavaScript](https://img.shields.io/badge/JavaScript-63.1%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-34%25-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-2.9%25-E34C26?style=for-the-badge&logo=html5&logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-13B6A8?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A modern, user-friendly MERN stack expense tracking application built to help you manage your finances efficiently. Track, categorize, and analyze your spending habits with ease.

## 🌐 Live Demo

**[View Live Application](https://expense-tracker-wmiy.onrender.com/)**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 📊 **Dashboard**: View your spending overview and financial summary
- ➕ **Add Expenses**: Easily log new expenses with category and description
- 📝 **Expense History**: Track all your expenses in a organized list
- 🏷️ **Categories**: Organize expenses by different categories
- 🔍 **Filter & Search**: Find expenses quickly with filtering options
- 📈 **Analytics**: Visualize spending patterns with charts and graphs
- 💾 **Data Persistence**: All data is securely stored in the backend
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **JavaScript** - Programming language
- **CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database

### Deployment
- **Render** - Hosting platform

## 📁 Project Structure

```
expense-tracker/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   └── package.json
├── backend/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git**
- **MongoDB** (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohanvishnuvardhanreddy/expense-tracker.git
   cd expense-tracker
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

#### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   # Backend runs on http://localhost:5000 (or specified port)
   ```

2. **Start the Frontend Development Server** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

#### Production Build

1. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy** - Follow your hosting platform's deployment instructions

## 📖 Usage

1. **Navigate to the Application**: Open [https://expense-tracker-wmiy.onrender.com/](https://expense-tracker-wmiy.onrender.com/)

2. **Add an Expense**:
   - Click the "Add Expense" button
   - Fill in the amount, category, and description
   - Click "Save"

3. **View Expenses**: All your expenses are displayed in the main dashboard

4. **Filter Expenses**: Use category filters to view specific types of expenses

5. **Analytics**: Check the analytics section to see spending patterns

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Get all expenses |
| POST | `/api/expenses` | Create a new expense |
| GET | `/api/expenses/:id` | Get expense by ID |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |
| GET | `/api/categories` | Get all categories |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Made with ❤️ by [Mohan Vishnu Vardhan Reddy](https://github.com/mohanvishnuvardhanreddy)**

Have questions or suggestions? Feel free to open an issue or contact me!
