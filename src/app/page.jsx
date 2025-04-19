"use client";

import "./page.css";

export default function Home() {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="w-full flex justify-between items-center max-w-6xl mb-12">
                <h1 className="wellnessCenter text-4xl font-bold text-[#4b3e2e]">
                    🌱 Wellness Center
                </h1>
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
            </div>

            <h1 className="title text-center text-3xl font-semibold mb-6">
                Are you living your best life?
            </h1>
            <p className="text-center text-gray-600 mb-6">
                Our Wellness Center contains information and tools to measure
                how your life is going.
            </p>

            <div className="mainContent bg-[#f3e9dd] p-6 rounded-xl mb-10">
                <div className="mainContent-inner flex flex-col md:flex-row items-center gap-6">
                    <div className="mainContent-text flex-1">
                        <h2 className="text-2xl font-bold text-green-800 mb-2">
                            Daily Habits, Big Change
                        </h2>
                        <p className="text-gray-700">
                            Wellness isn’t built in a day. It’s about the small
                            decisions you make every morning, afternoon, and
                            night. Explore our suggested routines for building
                            resilience, improving energy, and cultivating peace
                            of mind.
                        </p>
                    </div>
                    <div className="mainContent-img flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Morning routine"
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mainContent bg-[#f3e9dd] p-6 rounded-xl mb-10">
                <div className="mainContent-inner flex flex-col md:flex-row items-center gap-6">
                    <div className="mainContent-text flex-1">
                        <h2 className="text-2xl font-bold text-green-800 mb-2">
                            Track Your Journey
                        </h2>
                        <p className="text-gray-700">
                            Use our Life Tracker to monitor your habits, moods,
                            and milestones. It’s your private space to reflect
                            on where you’ve been and where you're headed next.
                            Consistency fuels growth — and every entry counts.
                        </p>
                        <a href="life-tracker">
                            <button>Track Your Goals</button>
                        </a>
                    </div>
                    <div className="mainContent-img flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=1566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Journaling and tracking"
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="mainContent bg-[#f3e9dd] p-6 rounded-xl mb-10">
                <div className="mainContent-inner flex flex-col md:flex-row items-center gap-6">
                    <div className="mainContent-text flex-1">
                        <h2 className="text-2xl font-bold text-green-800 mb-2">
                            Stay Inspired
                        </h2>
                        <p className="text-gray-700">
                            We all hit walls sometimes. That’s why we created a
                            collection of motivational quotes, stories, and
                            community highlights to uplift you on your path.
                            Discover something that speaks to you — and keep
                            moving forward.
                        </p>
                        <a href="/motivation">
                            <button>Get Inspired</button>
                        </a>
                    </div>
                    <div className="mainContent-img flex-1">
                        <img
                            src="inspire.jpg"
                            alt="Motivational content"
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#e9dfd3] p-8 rounded-xl mb-10 footer">
                <h2 className="bottom">Explore More</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
                        <h3 className="text-xl font-semibold text-[#4b3e2e] mb-2">
                            About Us
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Learn more about our mission, values, and the people
                            behind the Wellness Center.
                        </p>
                        <a href="about">
                            <button href="#">Meet the Team</button>
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
                        <h3 className="text-xl font-semibold text-[#4b3e2e] mb-2">
                            Contact Us
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Have questions or feedback? Reach out — we're here
                            to support your journey.
                        </p>
                        <a href="/contact">
                            <button
                                href="#"
                                className="mt-auto inline-block bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                            >
                                Get in Touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
