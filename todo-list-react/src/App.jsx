// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAddTodo = (name, description, creator) => {
    const newTodo = {
      id: todos.length + 1,
      name,
      description,
      creator,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
    </div>
  );
};

export default App;
