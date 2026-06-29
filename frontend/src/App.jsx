import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const API_URL = '/api/expenses';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return alert("Please fill out all fields");

    const newExpense = { title, amount: parseFloat(amount), category, date };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense)
      });
      
      if (res.ok) {
        setTitle('');
        setAmount('');
        setDate(new Date().toISOString().split('T')[0]);
        fetchExpenses(); 
      }
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchExpenses(); 
        }
      } catch (err) {
        console.error("Error deleting expense:", err);
      }
    }
  };

  // Calculations
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const currentMonthExpenses = expenses.reduce((acc, curr) => {
    const expenseDate = new Date(curr.date);
    const today = new Date();
    if (expenseDate.getMonth() === today.getMonth() && expenseDate.getFullYear() === today.getFullYear()) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container">
      <h1>SpendWise Tracker</h1>
      
      <div className="metrics-container">
        <div className="balance-card monthly">
          <h3>This Month</h3>
          <h2>${currentMonthExpenses.toFixed(2)}</h2>
        </div>
        <div className="balance-card total">
          <h3>Total All-Time</h3>
          <h2>${totalExpenses.toFixed(2)}</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="expense-form">
        <h3>Add New Transaction</h3>
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
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
        </select>
        <button type="submit">Save Expense</button>
      </form>

      <div className="expense-list">
        <h3>Transaction History ({expenses.length} items)</h3>
        {expenses.length === 0 ? <p className="no-data">No history found.</p> : (
          <ul>
            {expenses.map((expense) => (
              <li key={expense._id} className="expense-item">
                <div className="expense-info">
                  <span className="expense-title"><strong>{expense.title}</strong></span>
                  <span className="expense-meta">{expense.category} • {formatDate(expense.date)}</span>
                </div>
                <div className="expense-actions">
                  <span className="amount-text">${expense.amount.toFixed(2)}</span>
                  <button onClick={() => handleDelete(expense._id)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;