import React from 'react';
import { Link } from 'react-router-dom';

const featuresFree = [
  {
    label: 'AI Chatbot',
    desc: 'Custom database with science, elite athletes, and personal experience'
  },
  {
    label: 'L-sit Program',
    desc: 'Complete step-by-step program to master your first L-sit'
  },
  {
    label: 'RepBot',
    desc: 'Tracks joint angles for 7 key bodyweight exercises'
  },
  {
    label: 'Basic Form Feedback',
    desc: 'Get started with fundamental movement patterns'
  }
];

const featuresPro = [
  {
    label: 'Everything in Free',
    desc: 'All free features included'
  },
  {
    label: '13 Skill Programs',
    desc: 'Weekly programs for handstand, planche, muscle-up, and more'
  },
  {
    label: 'Elite Community',
    desc: 'Access to 5,000+ athletes and world champions'
  },
  {
    label: 'Personal Coaching',
    desc: 'Direct feedback from elite athletes and coaches'
  },
  {
    label: 'Nutrition Guides',
    desc: 'Complete meal plans and fueling strategies'
  },
  {
    label: 'Equipment Reviews',
    desc: 'Expert recommendations on gear and setup'
  }
];

const CheckIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#3B82F6" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PricingSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-white" id="pricing">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900" style={{letterSpacing: '-0.02em'}}>
          Choose Your <span className="text-blue-600">Plan</span>
        </h2>

        {/* Social Proof */}
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-600 text-sm font-medium">10,000+ athletes</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start w-full">
        {/* Free Card */}
        <div className="relative flex-1 max-w-md mx-auto bg-black shadow-xl rounded-2xl p-8 flex flex-col items-start min-w-[320px]">
          <div className="flex items-center mb-6">
            <img src="/images/Free_plan.png" alt="Free Plan" className="w-16 h-16 rounded-xl mr-4" />
            <span className="uppercase text-xs font-bold tracking-wider px-3 py-2 bg-gray-800 text-gray-300 rounded-full" style={{letterSpacing: '0.1em'}}>
              Free Forever
            </span>
          </div>

          <div className="mb-6">
            <div className="text-4xl font-bold mb-2 text-white">$0</div>
            <div className="text-gray-400 text-sm">Perfect for getting started</div>
          </div>

          <ul className="space-y-4 w-full mb-8">
            {featuresFree.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <div>
                  <span className="font-semibold text-white">{f.label}</span>
                  {f.desc && <div className="text-gray-400 text-xs mt-1 leading-relaxed">{f.desc}</div>}
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/train"
            className="w-full py-4 rounded-xl text-center font-bold text-sm tracking-wide transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
          >
            Get Started Free
          </Link>
        </div>

        {/* Pro Card - Featured */}
        <div className="relative flex-1 max-w-md mx-auto bg-black shadow-xl rounded-2xl p-8 flex flex-col items-start min-w-[320px] border-2 border-blue-600">
          {/* Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              MOST POPULAR
            </div>
          </div>

          <div className="flex items-center mb-6">
            <img src="/images/Paid_plan.png" alt="Paid Plan" className="w-16 h-16 rounded-xl mr-4" />
            <span className="uppercase text-xs font-bold tracking-wider px-3 py-2 bg-blue-600/20 text-blue-400 rounded-full" style={{letterSpacing: '0.1em'}}>
              Pro Access
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">$15</span>
              <span className="text-sm font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">one-time</span>
            </div>
          </div>

          <ul className="space-y-4 w-full mb-8">
            {featuresPro.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <div>
                  <span className="font-semibold text-white">{f.label}</span>
                  {f.desc && <div className="text-gray-400 text-xs mt-1 leading-relaxed">{f.desc}</div>}
                </div>
              </li>
            ))}
          </ul>

          <a
            href="https://whop.com/checkout/plan_lJwZp3pjUVNbg?d2c=true"
            className="w-full py-4 rounded-xl text-center font-bold text-sm tracking-wide transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
            style={{letterSpacing: '0.05em'}}
          >
            Upgrade to Pro
          </a>

          <div className="mt-4 text-xs text-gray-400 text-center w-full">
            Secure Payment • Lifetime Access
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 