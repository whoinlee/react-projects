import React, { useState, useContext } from 'react';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';
//-- Styles
import '../styles/AddTransaction.css';


const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText ]= useState('');
    const [amount, setAmount]= useState('');
  
    const onSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      addTransaction({
        id: Math.floor(Math.random() * 100000000),
        text,
        amount:+amount
      });
      setText('');
      setAmount('');
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} placeholder="Enter text..." 
                 onChange={ e => setText(e.target.value) }/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} placeholder="Enter amount..." 
                 onChange={ e => setAmount(e.target.value) }/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
