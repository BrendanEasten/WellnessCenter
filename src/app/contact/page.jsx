'use client';
import React, { useState } from 'react';
import "./contact.css" 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#f9f8f6] px-6 py-10 font-sans">
      {/* Header + Nav */}
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-[#4b3e2e]">🌱 Wellness Center</h1>
        <nav className="space-x-6 flex text-lg">
          <a href="/" className="text-[#4b3e2e] hover:text-green-700 transition">Home</a>
          <a href="#" className="text-[#4b3e2e] hover:text-green-700 transition">About Us</a>
          <a href="#" className="text-[#4b3e2e] hover:text-green-700 transition">Life Tracker</a>
          <a href="#" className="text-[#4b3e2e] hover:text-green-700 transition">Motivation</a>
          <a href="#" className="text-green-700 font-semibold">Contact Us</a>
        </nav>
      </div>

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#4b3e2e] mb-2">📬 Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to drop us a message.
        </p>
      </div>

      {/* Styled Contact Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-[#dedcd7] max-w-3xl mx-auto p-8 transition hover:shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#4b3e2e] font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-[#ddd5ca] rounded-xl bg-[#fafaf9] focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-[#4b3e2e] font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-[#ddd5ca] rounded-xl bg-[#fafaf9] focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-[#4b3e2e] font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-[#ddd5ca] rounded-xl bg-[#fafaf9] focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#7fb77e] text-white px-6 py-3 rounded-xl hover:bg-[#6ca76c] transition font-semibold"
            >
              🌿 Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
