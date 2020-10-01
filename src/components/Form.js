import React from "react";

export const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {text: inputText, completed: false, id: Math.round(Math.random() * Math.random()*1578)}
    ])
    setInputText("")
  }

  const statusHandler = (e) =>{
    setStatus(e.target.value)
  }

  return (
    <div>
      <form>
        <input  onChange={inputTextHandler} type="text" className="todo-input" value={inputText} placeholder="Add Todo..." />
        <button className="todo-button" type="submit" onClick={submitTodoHandler} >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler} >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};
