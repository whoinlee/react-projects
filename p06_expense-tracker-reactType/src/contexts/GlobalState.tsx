import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//-- Types
import { TransactionType, State } from '../datatypes/DataTypes';


//-- Initial state
const initialState:State = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ],
  deleteTransaction: (id) => {},
  addTransaction: (transaction) => {}
};
//-- Create context
export const GlobalContext = createContext(initialState);


type Props = { children?: React.ReactNode };
//-- Provider component
export const GlobalProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  const deleteTransaction = (id:number) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };
  
  const addTransaction = (transaction:TransactionType) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}} >
        {children}
    </GlobalContext.Provider>
  );
};