import React, { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title.trim() === '') return;
    onAdd({
      id: Date.now(),
      title,
      description,
      started: false,
      completed: false,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form bg-gray-100 p-4 rounded-lg mt-6">
      <h3 className="form-title text-lg font-semibold mb-2">Add a Personal Goal</h3>
      <input
        className="input border mb-2 rounded p-2 text-sm w-full"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="input border rounded p-2 text-sm w-full mb-2"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="add-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Goal
      </button>
    </div>
  );
}