import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const API_URL = 'http://localhost:5000/api/expenses';

  // Fetch expenses on page load
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Please fill out all fields");

    const newExpense = { title, amount: parseFloat(amount), category };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense)
      });
      
      if (res.ok) {
        setTitle('');
        setAmount('');
        fetchExpenses(); // Refresh the list
      }
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchExpenses(); // Refresh the list
      }
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  // Calculate Running Total
  const totalBalance = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="container">
      <h1>SpendWise Tracker</h1>
      
      <div className="balance-card">
        <h2>Total Spent: ${totalBalance.toFixed(2)}</h2>
      </div>

      {/* Expense Form */}
      <form onSubmit={handleSubmit} className="expense-form">
        <input 
          type="text" 
          placeholder="Expense Title (e.g., Groceries)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Amount ($)" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>

      {/* Expense List */}
      <div className="expense-list">
        <h3>History</h3>
        {expenses.length === 0 ? <p>No expenses logged yet.</p> : (
          <ul>
            {expenses.map((expense) => (
              <li key={expense._id} className="expense-item">
                <span><strong>{expense.title}</strong> ({expense.category})</span>
                <span className="amount-text">${expense.amount.toFixed(2)}</span>
                <button onClick={() => handleDelete(expense._id)} className="delete-btn">X</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;