import React from 'react';

const faqs = [
  {
    q: "I'm a beginner — is this program still for me?",
    a: "Absolutely. The program is designed for all levels. Each skill has many clear levels of progression, so you'll always know where you are and what to do next.",
  },
  {
    q: "What do I get?",
    a: (
      <ul style={{paddingLeft: 0, marginTop: 16, marginBottom: 0, listStyle: 'none'}}>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Full 8-week training program</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Exact reps, sets, and workouts</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Skill-specific PDFs</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Video coaching (if you send in your form)</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start'}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Community support</span>
        </li>
      </ul>
    ),
  },
  {
    q: "Do I need a gym or any equipment?",
    a: "Nope. All you need is a pull-up bar and your bodyweight. That's it. No machines, no membership.",
  },
  {
    q: "How long until I see real progress?",
    a: "Most students see noticeable progress in 2–4 weeks, depending on consistency. The full program is 8 weeks, and many unlock their first skill before that.",
  },
  {
    q: "How much time do I need each day?",
    a: "Workouts take around 45–60 minutes, and you can train 3–6 days/week depending on your schedule. You'll be guided based on your goals.",
  },
  {
    q: "What if I can't even do a pull-up or push-up yet?",
    a: "The program includes beginner regressions and easier variations to build your baseline strength, and will continue for many other skills.",
  },
  {
    q: "Can I combine this with other workouts or sports?",
    a: "Yes! The program is designed to be flexible. If you're doing weight training, sports, or other activities, I'll show you how to adjust your schedule to avoid overtraining.",
  },
  {
    q: "Will I get support or feedback on my form?",
    a: "100%. You can send in your form videos, and I'll personally give you feedback inside the community.",
  },
  {
    q: "What happens after the 8 weeks?",
    a: "You'll move into the Advanced Training Phase with access to new skills like the planche, front lever, or one-arm handstand — and support will be continued, just a different way of training.",
  },
  {
    q: "Is this a one-time payment or subscription?",
    a: "One-time payment. You get lifetime access to the entire program, all future updates, and the private community.",
  },
  {
    q: "Do you offer refunds?",
    a: "There are no refunds. That's like asking for a refund on a gym membership because you didn't go. This only works if you do — and if you're ready, I'm ready to watch you succeed.",
  },
  {
    q: "How is this different from YouTube tutorials or free content online?",
    a: "YouTube gives you scattered pieces; the BG Method gives you a step-by-step roadmap built for real progression, with accountability, feedback, and coaching.",
  },
];

const FAQSection = () => {
  return (
    <section style={{background: '#10142c', padding: '48px 0', color: '#fff'}}>
      <div style={{maxWidth: 600, margin: '0 auto', padding: '0 1rem'}}>
        <h2 style={{textAlign: 'center', fontWeight: 800, fontSize: 38, marginBottom: 40, color: '#fff', letterSpacing: 0.5, textDecoration: 'underline', textUnderlineOffset: 6}}>FAQ</h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{marginBottom: 40}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8}}>
                <span style={{color: '#fff', fontSize: 28, marginTop: 2}}>❓</span>
                <span style={{fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1.2}}>{faq.q}</span>
              </div>
              <div style={{paddingLeft: 44, color: '#fff', fontSize: 17, lineHeight: 1.6}}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
