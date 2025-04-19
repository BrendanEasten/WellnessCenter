'use client'; // This is a client component
import React, { use, useEffect, useState } from 'react';

export default function Page() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch quotes on mount
    useEffect(() => {
        fetchQuote();
    }, []);

    // Fetch and pick a random quote
    async function fetchQuote() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/motivation');
            if (!response.ok) throw new Error('Failed to fetch quotes');
            const data = await response.json();
            const random = data[Math.floor(Math.random() * data.length)];
            console.log(data, random)
            setQuote(random);
        } catch (err) {
            console.error(err);
            setError('Could not load a quote.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <div className="p-6 max-w-5xl mx-auto">
                <div className="w-full flex justify-between items-center max-w-6xl mb-12">
                    <h1 className="wellnessCenter text-4xl font-bold text-[#4b3e2e]">🌱 Wellness Center</h1>
                    <nav className="space-x-6 flex">
                        <a href="/" className="nav-link">Home</a>
                        <a href="/life-tracker" className="nav-link">Life Tracker</a>
                        <a href="/motivation" className="nav-link">Motivation</a>
                        <a href="#" className="nav-link">Contact Us</a>
                    </nav>
                </div>
            </div><br />
            <h1>Motivational Quote</h1>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {quote && (
                <div style={{
                    maxWidth: '600px',
                    margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}>
                    <p style={{ fontSize: '1.2em', fontStyle: 'italic' }}>"{quote.q}"</p>
                    <p style={{ textAlign: 'right', marginTop: '10px', fontWeight: 'bold' }}>
                        — {quote.a || 'Unknown'}
                    </p>
                </div>
            )}

            <button
                onClick={fetchQuote}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '1em',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '5px',
                    backgroundColor: '#0070f3',
                    color: 'white',
                }}
            >
                Get Another Quote
            </button>
        </div>
    );
}
