import React, {useState, useEffect} from 'react';
import './App.css';
import { Form } from "./components/Form";
import {TodoList} from "./components/TodoList"


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filterdTodos, setFilteredTodos] = useState([])

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(() =>{
    getLocalTodos();
  }, [])

  useEffect(() =>{
    filterHandler();
    saveLocal();
  }, [todos, status])

  const saveLocal = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify(todos));
    }else{
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }

  return (
    <div className="App">
      <header>
  <h1>Joseph's Todo List</h1>
      </header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus}  />
      <TodoList setTodos={setTodos} todos={todos}  filterdTodos={filterdTodos} />
    </div>
  );
}

export default App;
