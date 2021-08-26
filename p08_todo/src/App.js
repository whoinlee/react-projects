import React, { useState } from 'react';
//-- Styles
import './App.css';
//-- Components
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <header>
        <h1>WhoIN's Todo App</h1>
      </header>
      <InputForm  inputText={inputText} setInputText={setInputText} 
                  todos={todos} setTodos={setTodos} 
                  status={status} setStatus={setStatus} />
      <TodoList   todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
