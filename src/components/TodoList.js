import React from 'react'
import { Todo } from "./Todo";

export const TodoList = ({todos, setTodos, filterdTodos}) => {
    return (
        <div className="todo-container">
        <ul className="todo-list">
        {filterdTodos.map(todo => (
            <Todo  setTodos={setTodos} todo={todo} key={todo.id} todos={todos}/>
        ) )}
        </ul>
      </div>
    )
}
