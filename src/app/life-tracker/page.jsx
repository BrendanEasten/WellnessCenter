"use client";
import React, { useState } from "react";
import GoalCard from "../components/LifeTracker/GoalCard";
import AddTaskForm from "../components/LifeTracker/AddTaskForm";
import ProgressBar from "../components/LifeTracker/ProgressBar";
import Nav from "../components/Nav";

const presetGoals = [
    {
        id: 1,
        title: "Drink 2L of water",
        description: "Stay hydrated throughout the day.",
        started: false,
        completed: false,
    },
    {
        id: 2,
        title: "Exercise 30 Mins!",
        description: "Exercise or take a walk.",
        started: false,
        completed: false,
    },
    {
        id: 3,
        title: "Journal 10 mins!",
        description: "Write down your thoughts or reflections.",
        started: false,
        completed: false,
    },
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
    const progressValue =
        goals.length > 0
            ? Math.round((completedCount / goals.length) * 100)
            : 0;

    return (
        <div className="tracker-container">
            <div>
                <h1 className="wellnessCenter">🌱 Wellness Center</h1>
                <Nav />
            </div>

            <h1 className="title">🌿 Goal Progress Tracker</h1>
            <p>Track your wellness goals, set intentions, and reflect.</p>
            {/* Info Section */}
            <div className="mainContent">
                <div className="mainContent-inner">
                    <div className="mainContent-text ">
                        <h2>Why Set Life Goals?</h2>
                        <p className="text-gray-700">
                            Setting goals gives your life direction, boosts
                            motivation, and helps you track growth over time.
                            Whether it&apos;s health, career, or personal
                            happiness — progress is powerful. Reflect on where
                            you are, define where you want to be, and take
                            small, meaningful steps every day.
                        </p>
                    </div>
                    <div className="mainContent-img">
                        <img
                            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                            alt="Nature inspiration"
                        />
                    </div>
                </div>
            </div>
            {/* Progress Bar */}
            <ProgressBar value={progressValue} />
            <p>{progressValue}% completed</p>

            {/* Goals Grid */}
            <div className="grid">
                {goals.map((goal) => (
                    <GoalCard
                        key={goal.id}
                        goal={goal}
                        onStart={handleStart}
                        onComplete={handleComplete}
                    />
                ))}
                <AddTaskForm onAdd={handleAddGoal} />
            </div>
        </div>
    );
}
