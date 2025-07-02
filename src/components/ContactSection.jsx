import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Have questions or want to learn more? Reach out and our team will get back to you promptly.
        </p>
        <form className="space-y-6 bg-white border border-gray-200 rounded-xl shadow-sm p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-primary outline-none transition" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-primary outline-none transition" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-primary outline-none transition" required></textarea>
          </div>
          <button type="submit" className="w-full px-6 py-3 rounded-md bg-primary text-white font-semibold text-lg shadow hover:bg-accent transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 