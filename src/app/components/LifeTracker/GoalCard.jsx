import React, { useState } from 'react';

export default function GoalCard({ goal, onStart, onComplete }) {
  const [note, setNote] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="goal-card bg-white shadow-md p-4 rounded-xl mb-4">
      <div className="goal-header flex justify-between items-center mb-2">
        <h2 className="goal-title text-xl font-semibold">{goal.title}</h2>

        {!goal.started && !goal.completed && (
          <button
            onClick={() => onStart(goal.id)}
            className="goal-status not-completed px-3 py-1 rounded-full"
          >
            Start Goal
          </button>
        )}

        {goal.started && !goal.completed && (
          <div className="flex gap-2">
            <button className="goal-status not-completed px-3 py-1 rounded-full" disabled>
              In Progress
            </button>
            <button
              onClick={() => onComplete(goal.id)}
              className="goal-status completed px-3 py-1 rounded-full"
            >
              Complete
            </button>
          </div>
        )}

        {goal.completed && (
          <button className="goal-status completed px-3 py-1 rounded-full">
            Completed
          </button>
        )}
      </div>

      <p className="goal-description text-gray-700 mb-4">{goal.description}</p>

      <div className="date-inputs flex flex-col gap-2 mb-4">
        <label className="label text-xs text-gray-500">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input border rounded p-1 text-sm"
        />

        <label className="label text-xs text-gray-500">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input border rounded p-1 text-sm"
        />
      </div>

      <textarea
        className="notes w-full border rounded p-2 text-sm"
        placeholder="Share your thoughts or challenges..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}