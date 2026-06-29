const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Expense = require('./models/Expense');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.error("Database connection error:", err));

// --- API Routes ---

// 1. GET all expenses
app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. POST a new expense (Accepts custom input dates)
app.post('/api/expenses', async (req, res) => {
  const { title, amount, category, date } = req.body;
  try {
    const newExpense = new Expense({ 
      title, 
      amount, 
      category, 
      date: date ? new Date(date) : undefined 
    });
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. DELETE an expense by ID
app.delete('/api/expenses/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Expense deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- FULL-STACK INTEGRATION STATIC MIDDLEWARE ---
const path = require('path');

// Serve production assets from the compiled React app
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback routing handler for unified app delivery
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));