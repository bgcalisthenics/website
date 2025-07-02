import React, { useState } from 'react';
import useInView from "../hooks/useInView";

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState('physical');
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.3 });

  const tabs = [
    { id: 'physical', label: 'Physical Benefits', icon: '' },
    { id: 'mental', label: 'Mental Benefits', icon: '' },
    { id: 'social', label: 'Social Benefits', icon: '' }
  ];

  const benefits = {
    physical: [
      {
        title: "Build Real Strength",
        description: "Develop functional strength that translates to everyday activities and sports performance.",
        stat: "Average 40% strength increase in 8 weeks",
        icon: "🏋️‍♂️"
      },
      {
        title: "Improve Body Composition",
        description: "Burn fat and build lean muscle mass for a healthier, more confident physique.",
        stat: "73% report improved body image",
        icon: "📏"
      },
      {
        title: "Enhance Flexibility & Mobility",
        description: "Increase range of motion and reduce stiffness from sitting at desks all day.",
        stat: "50% improvement in flexibility tests",
        icon: "🤸‍♀️"
      },
      {
        title: "Boost Energy Levels",
        description: "Feel more energetic throughout the day and sleep better at night.",
        stat: "89% report higher daily energy",
        icon: "⚡"
      }
    ],
    mental: [
      {
        title: "Reduce Stress & Anxiety",
        description: "Exercise releases endorphins that naturally combat stress and anxiety.",
        stat: "67% reduction in reported anxiety levels",
        icon: "😌"
      },
      {
        title: "Improve Focus & Concentration",
        description: "Regular exercise enhances cognitive function and academic performance.",
        stat: "25% improvement in test scores",
        icon: "🎯"
      },
      {
        title: "Build Mental Resilience",
        description: "Overcome challenges in workouts to build confidence in all areas of life.",
        stat: "92% report increased confidence",
        icon: "🛡️"
      },
      {
        title: "Better Sleep Quality",
        description: "Physical activity helps regulate sleep patterns for deeper, more restful sleep.",
        stat: "78% sleep better within 2 weeks",
        icon: "😴"
      }
    ],
    social: [
      {
        title: "Join a Supportive Community",
        description: "Connect with like-minded teens from around the world who share your fitness journey.",
        stat: "10,000+ active community members",
        icon: "🌍"
      },
      {
        title: "Develop Leadership Skills",
        description: "Become a role model for friends and family by leading a healthy lifestyle.",
        stat: "84% inspire others to start exercising",
        icon: "👑"
      },
      {
        title: "Build Lasting Friendships",
        description: "Form meaningful connections with peers who support your growth and goals.",
        stat: "Average 5 new friendships formed",
        icon: "🤝"
      },
      {
        title: "Gain Social Confidence",
        description: "Feel more confident in social situations and group activities.",
        stat: "71% report improved social confidence",
        icon: "✨"
      }
    ]
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20" id="benefits">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Life-Changing Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transform Your Life in 
            <span className="block gradient-text bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Every Way Possible
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our program doesn't just change your body - it transforms your entire life. 
            Here's the science-backed proof of what you can expect.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300'
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits[activeTab].map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform ${
                benefitsInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3 border border-blue-100">
                    <div className="text-sm font-bold text-blue-800">{benefit.stat}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Backing */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black mb-4">Backed by Science</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our methods are based on peer-reviewed research and validated by real results from thousands of teens.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔬</div>
                <h4 className="font-bold text-lg mb-2">Research-Based</h4>
                <p className="text-blue-100 text-sm">Programs designed using latest exercise science and adolescent development research</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">👨‍⚕️</div>
                <h4 className="font-bold text-lg mb-2">Expert Approved</h4>
                <p className="text-blue-100 text-sm">Reviewed by pediatric exercise physiologists and sports medicine doctors</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="font-bold text-lg mb-2">Data-Driven</h4>
                <p className="text-blue-100 text-sm">Continuously improved based on real user data and outcome tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Ready to Experience These Benefits?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of teens who are already transforming their lives. Your journey starts today.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            <span>🚀</span>
            Start Your Transformation
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
