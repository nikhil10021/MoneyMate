import React from 'react';

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="summary-container">
        <div className="summary-item income">
          <h3>Total Income</h3>
          <p>₹{income}</p>
        </div>
        <div className="summary-item expense">
          <h3>Total Expense</h3>
          <p>₹{expense}</p>
        </div>
        <div className="summary-item balance">
          <h3>Balance</h3>
          <p>₹{balance}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
