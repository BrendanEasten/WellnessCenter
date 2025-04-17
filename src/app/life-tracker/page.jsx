'use client';
import React, { useState } from 'react';
import GoalCard from '../components/LifeTracker/GoalCard';
import AddTaskForm from '../components/LifeTracker/AddTaskForm';
import ProgressBar from '../components/LifeTracker/ProgressBar';

const presetGoals = [
  { id: 1, title: 'Drink 2L of water', description: 'Stay hydrated throughout the day.', started: false, completed: false },
  { id: 2, title: 'Exercise 30 Mins!', description: 'Exercise or take a walk.', started: false, completed: false },
  { id: 3, title: 'Journal 10 mins!', description: 'Write down your thoughts or reflections.', started: false, completed: false },
];

export default function LifeTrackerPage() {
  const [goals, setGoals] = useState(presetGoals);

  const handleAddGoal = (goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const handleStart = (id) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, started: true } : g))
    );
  };

  const handleComplete = (id) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, completed: true } : g))
    );
  };

  const completedCount = goals.filter((g) => g.completed).length;
  const progressValue = goals.length > 0 ? Math.round((completedCount / goals.length) * 100) : 0;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="w-full flex justify-between items-center max-w-6xl mb-12">
        <h1 className="wellnessCenter text-4xl font-bold text-[#4b3e2e]">🌱 Wellness Center</h1>
        <nav className="space-x-6 flex">
          <a href="http://localhost:3000/" className="nav-link">Home</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Life Tracker</a>
          <a href="#" className="nav-link">Motivation</a>
          <a href="#" className="nav-link">Contact Us</a>

        </nav>
      </div>

      <h1 className="title text-center text-3xl font-semibold mb-6">🌿 Life Progress Tracker</h1>
      <p className="text-center text-gray-600 mb-6">Track your wellness goals, set intentions, and reflect.</p>
{/* Info Section */}
<div className="mainContent bg-[#f3e9dd] p-6 rounded-xl mb-10">
  <div className="mainContent-inner flex flex-col md:flex-row items-center gap-6">
    <div className="mainContent-text flex-1">
      <h2 className="text-2xl font-bold text-green-800 mb-2">Why Set Life Goals?</h2>
      <p className="text-gray-700">
        Setting goals gives your life direction, boosts motivation, and helps you track growth over time.
        Whether it’s health, career, or personal happiness — progress is powerful. Reflect on where you are,
        define where you want to be, and take small, meaningful steps every day.
      </p>
    </div>
    <div className="mainContent-img flex-1">
      <img
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        alt="Nature inspiration"
        className="rounded-xl shadow-lg w-full h-auto object-cover"
      />
    </div>
  </div>
</div>
      {/* Progress Bar */}
      <ProgressBar value={progressValue} />
      <p className="text-center text-gray-600 mb-6">{progressValue}% completed</p>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onStart={handleStart}
            onComplete={handleComplete}
          />
        ))}
      </div>

      {/* Add Task Form */}
      <AddTaskForm onAdd={handleAddGoal} />
    </div>
  );
}
