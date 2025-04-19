"use client";

import Nav from "./components/Nav";
import "./page.css";

export default function Home() {
    return (
        <div className="home-container">
            <div>
                <h1 className="wellnessCenter">🌱 Wellness Center</h1>
                <Nav />
            </div>

            <h1 className="title">Are you living your best life?</h1>
            <p>
                Our Wellness Center contains information and tools to measure
                how your life is going.
            </p>

            <div className="mainContent">
                <div className="mainContent-inner">
                    <div className="mainContent-text">
                        <h2>Daily Habits, Big Change</h2>
                        <p className="ps">
                            Wellness isn&apos;t built in a day. It&apos;s about
                            the small decisions you make every morning,
                            afternoon, and night. Explore our suggested routines
                            for building resilience, improving energy, and
                            cultivating peace of mind.
                        </p>
                    </div>
                    <div className="mainContent-img">
                        <img
                            src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Morning routine"
                        />
                    </div>
                </div>
            </div>

            <div className="mainContent">
                <div className="mainContent-inner">
                    <div className="mainContent-text">
                        <h2>Track Your Journey</h2>
                        <p className="ps">
                            Use our Life Tracker to monitor your habits, moods,
                            and milestones. It&apos;s your private space to
                            reflect on where you&apos;ve been and where you're
                            headed next. Consistency fuels growth — and every
                            entry counts.
                        </p>
                        <a href="life-tracker">
                            <button>Track Your Goals</button>
                        </a>
                    </div>
                    <div className="mainContent-img">
                        <img
                            src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=1566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Journaling and tracking"
                        />
                    </div>
                </div>
            </div>

            <div className="mainContent">
                <div className="mainContent-inner">
                    <div className="mainContent-text">
                        <h2>Stay Inspired</h2>
                        <p className="ps">
                            We all hit walls sometimes. That&apos;s why we
                            created a collection of motivational quotes,
                            stories, and community highlights to uplift you on
                            your path. Discover something that speaks to you —
                            and keep moving forward.
                        </p>
                        <a href="/motivation">
                            <button>Get Inspired</button>
                        </a>
                    </div>
                    <div className="mainContent-img">
                        <img src="inspire.jpg" alt="Motivational content" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="bottom">Explore More</h2>
                <div className="grid">
                    <div>
                        <h3>About Us</h3>
                        <p className="ps">
                            Learn more about our mission, values, and the people
                            behind the Wellness Center.
                        </p>
                        <a href="about">
                            <button href="#">Meet the Team</button>
                        </a>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <p className="ps">
                            Have questions or feedback? Reach out — we're here
                            to support your journey.
                        </p>
                        <a href="/contact">
                            <button href="#">Get in Touch</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
