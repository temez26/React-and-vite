import React, { useState } from 'react';
import { NewTodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

import './styles.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
