"use client";
import { useState } from "react";
import "./contact.css";
import Nav from "../components/Nav";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="tracker-container">
            {/* Header + Nav */}
            <div>
                <h1 className="wellnessCenter">🌱 Wellness Center</h1>
                <Nav />
            </div>

            {/* Title */}
            <div>
                <h2>📬 Get in Touch</h2>
                <p>
                    We'd love to hear from you! Whether you have questions,
                    feedback, or just want to say hi, feel free to drop us a
                    message.
                </p>
            </div>

            {/* Styled Contact Card */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit">🌿 Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
