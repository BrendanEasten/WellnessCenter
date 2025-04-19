import React, { useState } from "react";

export default function GoalCard({ goal, onStart, onComplete }) {
    const [note, setNote] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <div className="goal-card">
            <div className="goal-header ">
                <h2 className="goal-title">{goal.title}</h2>

                {!goal.started && !goal.completed && (
                    <button
                        onClick={() => onStart(goal.id)}
                        className="goal-status not-completed"
                    >
                        Start Goal
                    </button>
                )}

                {goal.started && !goal.completed && (
                    <div className="flex">
                        <button className="goal-status not-completed" disabled>
                            In Progress
                        </button>
                        <button
                            onClick={() => onComplete(goal.id)}
                            className="goal-status completed"
                        >
                            Complete
                        </button>
                    </div>
                )}

                {goal.completed && (
                    <button className="goal-status completed">Completed</button>
                )}
            </div>

            <p className="goal-description">{goal.description}</p>

            <div className="date-inputs">
                <label className="label">Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="input"
                />

                <label className="label text-xs text-gray-500">End Date:</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="input"
                />
            </div>

            <textarea
                className="notes"
                placeholder="Share your thoughts or challenges..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
        </div>
    );
}
