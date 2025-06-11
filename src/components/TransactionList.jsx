import React from 'react';

function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map(({ id, title, amount, type, date }) => (
            <li key={id} className={`transaction-item ${type}`}>
              <div className="details">
                <div><strong>{title}</strong></div>
                <small>{date}</small>
              </div>
              <div className="amount">₹{amount}</div>
              <button onClick={() => onDelete(id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
// CSS styles for TransactionList