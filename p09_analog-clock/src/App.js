import { useState } from 'react';
import Clock from './components/Clock';
import './App.scss';

function App() {
  const [secRatio, setSecRatio] = useState(0);
  const [minRatio, setMinRatio] = useState(0);
  const [hourRatio, setHourRatio] = useState(0);

  const setClock = () => {
    const time = new Date();
    const secRatio = time.getSeconds() / 60;
    const minRatio = (secRatio + time.getMinutes())/60;
    const hourRatio = (minRatio + time.getHours())/12;
    setSecRatio(secRatio);
    setMinRatio(minRatio);
    setHourRatio(hourRatio);
  }

  setInterval(setClock, 1000);

  return (
    <div className="App">
      <Clock secRatio={secRatio} minRatio={minRatio} hourRatio={hourRatio}/>
    </div>
  );
}

export default App;
