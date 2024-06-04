import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo, toggleTodo } from '../redux/todoSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from './Modal';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  const handleUpdateTodo = (id, text) => {
    setInput(text);
    setEditId(id);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleSaveUpdate = () => {
    dispatch(updateTodo({ id: editId, text: input }));
    setInput('');
    setEditMode(false);
    setEditId(null);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setInput('');
    setIsModalOpen(false);
  };

  return (
    <div className="container justify-center p-2">
      <h1 className="text-2xl text-center font-bold mb-4">Todo App</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-[500px]"
          placeholder="Add a new todo"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 p-2 bg-green-500 text-white rounded-lg"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map(todo => (
          <li key={todo.id} className="mb-2 flex items-center justify-center">
            <span
              className={`w-[500px] cursor-pointer bg-CustomBg rounded-xl p-2 ${todo.completed ? 'line-through' : ''}`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => handleUpdateTodo(todo.id, todo.text)} className="ml-2">
              <EditIcon />
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="ml-2">
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-center text-xl font-bold mb-4">Edit Todo</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button onClick={handleSaveUpdate} className="p-2 bg-blue-500 text-white">
          Save
        </button>
      </Modal>
    </div>
  );
};

export default TodoApp;
