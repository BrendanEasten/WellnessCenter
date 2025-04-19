import React, { useState } from "react";

export default function AddTaskForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAdd = () => {
        if (title.trim() === "") return;
        onAdd({
            id: Date.now(),
            title,
            description,
            started: false,
            completed: false,
        });
        setTitle("");
        setDescription("");
    };

    return (
        <div className="task-form">
            <h3 className="form-title">Add a Personal Goal</h3>
            <input
                className="input border"
                placeholder="Goal Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="input"
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAdd} className="add-button">
                Add Goal
            </button>
        </div>
    );
}
