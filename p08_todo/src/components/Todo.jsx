import React from 'react'

const Todo = ( {todo, todos, setTodos} ) => {
  const deleteHandler = () => {
    // console.log("deleteHandler");
    setTodos(todos.filter(item => item.id !== todo.id));
  };
  const completeHandler = () => {
    // console.log("completeHandler");
    setTodos(todos.map(item => (item.id === todo.id)? {...item, completed:!item.completed} : item));
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed? "completed":""}`}>{todo.text}</li>
      <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo;
