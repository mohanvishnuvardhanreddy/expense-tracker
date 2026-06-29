const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Expense = require('./models/Expense');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON bodies

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

// 2. POST a new expense
app.post('/api/expenses', async (req, res) => {
  const { title, amount, category } = req.body;
  try {
    const newExpense = new Expense({ title, amount, category });
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. DELETE an expense
app.delete('/api/expenses/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Expense deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));