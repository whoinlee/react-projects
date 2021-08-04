import { useContext } from 'react';
//-- Components
import Transaction from './Transaction';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';
//-- Styles
import '../styles/Transactions.css';


const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => <Transaction transaction={transaction} key={transaction.id}/>)}
      </ul>
    </>
  );
};

export default TransactionList;
