//-- Types
import { State, Action } from '../datatypes/DataTypes';


const AppReducer = (state:State, action:Action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }

export default AppReducer;