import React from 'react';

const InputForm = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        console.log("e.target.value:" , e.target.value);
        setInputText(e.target.value);
        todos = e.target.value;
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,
         {text: inputText, completed: false, id: Math.floor(Math.random()* 1000)}
        ]);
        setInputText('');
        console.log("e:" , e);
    };

  return (
    <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={onSubmitHandler} type="submit" className="todo-button" >
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default InputForm;
