"use client"; // This is a client component
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";

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
            const response = await fetch("/api/motivation");
            if (!response.ok) throw new Error("Failed to fetch quotes");
            const data = await response.json();
            const random = data[Math.floor(Math.random() * data.length)];
            console.log(data, random);
            setQuote(random);
        } catch (err) {
            console.error(err);
            setError("Could not load a quote.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="quotes-container">
            <div>
                <div>
                    <h1 className="wellnessCenter">🌱 Wellness Center</h1>
                    <Nav />
                </div>
            </div>
            <br />
            <h1>Motivational Quote</h1>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {quote && (
                <div
                    style={{
                        maxWidth: "600px",
                        margin: "20px auto",
                        padding: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    }}
                >
                    <p style={{ fontSize: "1.2em", fontStyle: "italic" }}>
                        "{quote.q}"
                    </p>
                    <p
                        style={{
                            textAlign: "right",
                            marginTop: "10px",
                            fontWeight: "bold",
                        }}
                    >
                        — {quote.a || "Unknown"}
                    </p>
                </div>
            )}

            <button
                onClick={fetchQuote}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "1em",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#0070f3",
                    color: "white",
                }}
            >
                Get Another Quote
            </button>
        </div>
    );
}
