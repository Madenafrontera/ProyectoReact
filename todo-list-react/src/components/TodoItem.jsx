// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.isCompleted} 
        onChange={() => onToggleComplete(todo.id)} 
      />
      <span>{todo.name}</span>
      <button onClick={() => onDelete(todo.id)}>Borrar</button>
    </div>
  );
};

export default TodoItem;
