import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section id="cta" className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Ready to Transform Your Fitness?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Join SkillSurge today and unlock your full potential with expert guidance, proven programs, and a supportive community.
        </p>
        <Link
          to="/programs"
          className="inline-block px-8 py-3 rounded-md bg-primary text-white font-semibold text-lg shadow hover:bg-accent transition-colors"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
