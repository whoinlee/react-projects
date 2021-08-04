export type TransactionType = {
    id: number;
    text: string;
    amount: number;
}

export type State = {
    transactions: TransactionType[]
}

export type Action =  
| { type: 'DELETE_TRANSACTION' }
| { type: 'ADD_TRANSACTION' }
