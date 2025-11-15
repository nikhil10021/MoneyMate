import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert('Please fill in all fields!');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type,
      date,
    };

    onAdd(newTransaction);

    // Clear form
    setTitle('');
    setAmount('');
    setType('income');
    setDate('');
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title (e.g., Salary)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;
