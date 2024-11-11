// src/components/AddTodoForm.js
import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && creator) {
      onAddTodo(name, description, creator);
      setName('');
      setDescription('');
      setCreator('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nombre de la tarea" 
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descripcion de la tarea" 
      />
      <input 
        type="text" 
        value={creator} 
        onChange={(e) => setCreator(e.target.value)} 
        placeholder="Tu nombre" 
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default AddTodoForm;
