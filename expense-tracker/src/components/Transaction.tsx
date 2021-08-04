import React from 'react';
//-- Types
import { TransactionType } from '../datatypes/DataTypes';
//-- Styles
import '../styles/Transactions.css';


type Props = {
  transaction: TransactionType;
};
const Transaction:React.FC<Props> = ( {transaction} ) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
