import React, { useState, useEffect } from 'react';
//-- Styles
import './App.css';
//-- Components
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') !== null) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);  //run only once

  useEffect(() => {
    // console.log("hey============>");
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => (todo.completed === true)));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => (todo.completed === false)));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, status]);

  
  return (
    <div className="App">
      <header>
        <h1>WhoIN's Todo App</h1>
      </header>
      <InputForm  inputText={inputText} setInputText={setInputText} 
                  todos={todos} setTodos={setTodos} 
                  status={status} setStatus={setStatus} />
      {filteredTodos !== null ? <TodoList   todos={todos} setTodos={setTodos} 
                  filteredTodos={filteredTodos} /> : null}
    </div>
  );
}

export default App;
