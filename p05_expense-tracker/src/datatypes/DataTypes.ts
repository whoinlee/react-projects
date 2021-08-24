export type TransactionType = {
    id: number;
    text: string;
    amount: number;
}

export type State = {
    transactions: TransactionType[];
    deleteTransaction: (id:number) => void;
    addTransaction: (transaction:TransactionType) => void;
}

export type Action =  
| { type: 'DELETE_TRANSACTION', payload: number }
| { type: 'ADD_TRANSACTION', payload: TransactionType }
