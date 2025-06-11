import React, { useEffect, useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import './App.css';
import Header from './components/Header';
import Budget from './components/Budget';
import Charts from './components/Charts';


function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved =localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const clearAlltransaction = () => {
    const confirmClear = window.confirm(' Are you sure you want to del all transactions?')
    if (confirmClear) {
      setTransactions([]);
    }
  }

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions] ); 

  return (
    <div className="app"  style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <Header />
      
      <TransactionForm onAdd={addTransaction} />
      <Budget totalExpense={transactions
  .filter((t) => t.type === 'expense')
  .reduce((acc, t) => acc + t.amount, 0)} />

      <Summary transactions={transactions} />
      <Charts transactions={transactions} />

      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <button onClick={clearAlltransaction} style={{ margin: '10px 0', background: '#e74c3c', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
  🗑️ Clear All Transaction </button>
    </div>
  );
}

export default App;
