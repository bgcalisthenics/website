import React, { useState } from 'react';
import { MessageSquare, Activity, Dumbbell, Crown } from 'lucide-react';
import ChatbotComponent from './ChatbotComponent';
import RepBotComponent from './RepBotComponent';

const TrainSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Dumbbell },
    { id: 'chatbot', label: 'ChatBot', icon: MessageSquare },
    { id: 'repbot', label: 'RepBot', icon: Activity }
  ];

  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto" id="train">
      <div className="text-center mb-12">
        <h2 className="makova-h1 mb-4 text-black">Train with AI-Powered Tools</h2>
        <p className="makova-body-lg text-gray-700 max-w-3xl mx-auto">
          Experience the future of fitness with our advanced AI tools designed to guide, track, and optimize your calisthenics journey.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-md p-2 flex gap-2 train-tab-nav border border-gray-200">
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md makova-h4 train-tab-transition train-tab-button ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-black hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* ChatBot Card */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200 hover:border-black train-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black p-3 rounded-md">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="makova-h3 text-black">AI ChatBot</h3>
                    <span className="makova-body text-gray-600">(Free)</span>
                  </div>
                </div>
                <p className="makova-body text-gray-700 mb-4">
                  A custom-trained AI assistant using verified calisthenics science and elite coaching advice:
                </p>
                <ul className="space-y-2 makova-body text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Build beginner routines
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Fix your form
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Ask questions
                  </li>
                </ul>
                <button
                  onClick={() => setActiveTab('chatbot')}
                  className="w-full bg-black text-white makova-h4 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Try ChatBot
                </button>
              </div>

              {/* RepBot Card */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200 hover:border-black train-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black p-3 rounded-md">
                    <Activity className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="makova-h3 text-black">RepBot</h3>
                    <span className="makova-body text-gray-600">(Free)</span>
                  </div>
                </div>
                <p className="makova-body text-gray-700 mb-4">
                  Tracks your body using joint-angle detection.
                </p>
                <ul className="space-y-2 makova-body text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Covers 7 key bodyweight exercises
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Gives feedback and counts your reps
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Form analysis
                  </li>
                </ul>
                <button
                  onClick={() => setActiveTab('repbot')}
                  className="w-full bg-black text-white makova-h4 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Try RepBot
                </button>
              </div>
            </div>

            {/* Additional Programs */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black p-3 rounded-md">
                    <Dumbbell className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="makova-h3 text-black">L-Sit Program</h3>
                    <span className="makova-body text-gray-600">(Free)</span>
                  </div>
                </div>
                <p className="makova-body text-gray-700 mb-6">
                  Step-by-step program designed to help you achieve your first L-sit using smart regressions, tracking, and consistency.
                </p>
                <a
                  href="https://whop.com/checkout/plan_P7h3rFzlRIdaX?d2c=true"
                  className="w-full bg-black text-white makova-h4 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 text-center block"
                  style={{ textDecoration: 'none' }}
                >
                  Get Now
                </a>
              </div>

              <div className="bg-black rounded-lg shadow-xl p-8 border-2 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-3 rounded-md">
                    <Crown className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="makova-h3 text-white">Want more tools?</h3>
                  </div>
                </div>
                <p className="makova-body text-gray-300 mb-4">
                  Upgrade to <span className="makova-accent text-white">Makova Pro</span> for access to all 13 skill-based programs and a private community.
                </p>
                <a
                  href="/pricing"
                  className="w-full bg-white text-black makova-h4 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 text-center block"
                  style={{ textDecoration: 'none' }}
                >
                  Upgrade to Pro
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chatbot' && <ChatbotComponent />}
        {activeTab === 'repbot' && <RepBotComponent />}
      </div>
    </section>
  );
};

export default TrainSection;