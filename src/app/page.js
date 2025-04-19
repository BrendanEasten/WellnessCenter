import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen p-6 bg-[#fdfaf4]">
            {/* Navbar */}
            <div className="p-6 max-w-5xl mx-auto">
                <div className="w-full flex justify-between items-center max-w-6xl mb-12">
                    <h1 className="wellnessCenter text-4xl font-bold text-[#4b3e2e]">
                        🌱 Wellness Center
                    </h1>
                    <nav className="space-x-6 flex">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                        <a href="/life-tracker" className="nav-link">
                            Goal Tracker
                        </a>
                        <a href="#" className="nav-link">
                            Motivation
                        </a>
                        <a href="#" className="nav-link">
                            Contact Us
                        </a>
                    </nav>
                </div>
            </div>
            {/* Main Content */}
            <div className="text-center max-w-xl">
                <p className=" welcomePage text-lg text-[#4a3f35] mb-6,">
                    Welcome To Our Wellness Center
                </p>
            </div>
        </main>
    );
}
