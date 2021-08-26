import React, { useState } from 'react';
//-- Styles
import './App.css';
//-- Components
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>WhoIN's Todo App</h1>
      </header>
      <InputForm inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
      <TodoList />
    </div>
  );
}

export default App;
