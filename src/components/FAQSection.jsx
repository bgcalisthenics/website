import React from 'react';

const faqs = [
  {
    q: 'Do I need equipment?',
    a: 'No! All workouts are bodyweight-based and can be done anywhere. Some exercises have optional equipment for faster progress.'
  },
  {
    q: 'What if I’m a complete beginner?',
    a: 'Both programs are designed for all levels, with step-by-step progressions and regressions.'
  },
  {
    q: 'How fast will I see results?',
    a: 'Most students report visible progress within 2-3 weeks if they follow the plan.'
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes! If you’re not satisfied within 30 days, you get your money back—no questions asked.'
  }
];

const FAQSection = () => (
  <section className="faq-section">
    <h2 className="premium-gradient-text">Frequently Asked Questions</h2>
    <div className="faq-list">
      {faqs.map((faq, idx) => (
        <div className="faq-item" key={idx}>
          <div className="faq-q">Q: {faq.q}</div>
          <div className="faq-a">A: {faq.a}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FAQSection;
