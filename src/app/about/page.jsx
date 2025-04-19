"use client";

import "./page.css";

export default function AboutUs() {
    return (
        <div className="about-container">
            <nav className="space-x-6 flex">
                <a href="/" className="nav-link">
                    Home
                </a>
                <a href="/about" className="nav-link">
                    About Us
                </a>
                <a href="/life-tracker" className="nav-link">
                    Life Tracker
                </a>
                <a href="#" className="nav-link">
                    Motivation
                </a>
                <a href="#" className="nav-link">
                    Contact Us
                </a>
            </nav>
            <header className="about-header">
                <h1 className="title">🌱 About the Wellness Center</h1>
                <p className="subtitle">
                    Empowering your journey toward balance, mindfulness, and
                    growth.
                </p>
            </header>

            <section className="about-section">
                <div className="about-text">
                    <h2>Our Mission</h2>
                    <p>
                        At the Wellness Center, we believe well-being is a
                        lifelong journey — not a quick fix. Our mission is to
                        equip you with practical tools and daily encouragement
                        that help you thrive physically, mentally, and
                        emotionally.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                        alt="Peaceful nature scene"
                    />
                </div>
            </section>

            <section className="about-section reverse">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Meditation and reflection"
                    />
                </div>
                <div className="about-text">
                    <h2>Why We Exist</h2>
                    <p>
                        Whether you're seeking motivation, healthier routines,
                        or a space to reflect on your progress, we're here to
                        support you. Wellness isn’t one-size-fits-all — and
                        we’re dedicated to helping you find your own rhythm.
                    </p>
                </div>
            </section>

            <section className="about-section">
                <div className="about-text">
                    <h2>What You’ll Find Here</h2>
                    <ul>
                        <li>
                            📊 A Life Tracker to help monitor your habits and
                            goals
                        </li>
                        <li>
                            🧘‍♀️ Tools for self-care, mindfulness, and personal
                            growth
                        </li>
                        <li>
                            💬 Community stories and quotes to keep you inspired
                        </li>
                    </ul>
                </div>
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Tracking progress"
                    />
                </div>
            </section>

            <footer className="about-footer">
                <p>
                    👐 We're excited to be part of your journey. Welcome to the
                    Wellness Center.
                </p>
            </footer>
        </div>
    );
}
