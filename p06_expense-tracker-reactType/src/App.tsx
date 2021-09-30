//-- Components
import Header from './components/Header';
import Balance from './components/Balance';
import Expense from './components/Expense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './contexts/GlobalState';
//-- Styles
import { Wrapper } from './App.styles';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Wrapper>
        <Balance />
        <Expense />
        <TransactionList />
        <AddTransaction />
      </Wrapper>
    </GlobalProvider>
  );
}

export default App;
