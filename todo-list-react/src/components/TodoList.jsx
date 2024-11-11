// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggleComplete={onToggleComplete} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TodoList;
