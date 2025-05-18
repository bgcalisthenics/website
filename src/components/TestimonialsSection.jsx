import React from 'react';

const testimonials = [
  {
    name: 'Jake M.',
    text: 'I went from zero pull-ups to muscle-ups in 2 months. This is the best calisthenics program I’ve ever tried!',
  },
  {
    name: 'Sarah K.',
    text: 'The L Sit program was a game-changer for my core strength and flexibility. Highly recommended!',
  },
  {
    name: 'Chris D.',
    text: 'The routines are super easy to follow and the community is so supportive. I finally got my first handstand!'
  }
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2 className="premium-gradient-text">What Students Are Saying</h2>
    <div className="testimonials-grid">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <p className="testimonial-text">“{t.text}”</p>
          <div className="testimonial-name">- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
