import React from 'react';
import { useData } from './data/useData';


function App() {
  const data = useData();
  console.log("data?\n", data);

  if (!data) {
    return <pre>Loading ... </pre>
  }

  return (
    <div className="app">
      <header className="appHeader">
      </header>
    </div>
  );
}

export default App;
