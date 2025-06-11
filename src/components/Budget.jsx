import React, { useState, useEffect } from 'react';

function Budget({ totalExpense }) {
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem('budget');
    return saved ? parseFloat(saved) : 0;
  });

  const [input, setInput] = useState('');

  const remaining = budget - totalExpense;
  const isOverBudget = remaining < 0;

  // ✅ Smart suggestion logic
  let suggestion = '';
  if (budget === 0) {
    suggestion = 'Set a budget to get insights.';
  } else if (isOverBudget) {
    suggestion = '⚠️ You are spending more than your budget!';
  } else if (remaining < budget * 0.25) {
    suggestion = '💡 Caution: You have used over 75% of your budget.';
  } else {
    suggestion = '✅ Great! You are managing your budget well.';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(input);
    if (!isNaN(value)) {
      setBudget(value);
      setInput('');
    }
  };

  const handleReset = () => {
    const confirm = window.confirm('Reset your budget to ₹0?');
    if (confirm) {
      setBudget(0);
    }
  };

  useEffect(() => {
    localStorage.setItem('budget', budget);
  }, [budget]);

  return (
    <div className="budget-box">
      <h2>Monthly Budget</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Enter budget (₹)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Set Budget</button>
        <button
          type="button"
          onClick={handleReset}
          style={{ marginLeft: 10, backgroundColor: '#e74c3c', color: 'white' }}
        >
          Reset Budget
        </button>
      </form>

      <div>
        <p>📊 Budget: ₹{budget}</p>
        <p>💸 Remaining: ₹{remaining}</p>
        {isOverBudget && <p style={{ color: 'red' }}>⚠️ Over Budget!</p>}
        <p style={{ marginTop: '10px', fontStyle: 'italic' }}>{suggestion}</p>
      </div>
    </div>
  );
}

export default Budget;
