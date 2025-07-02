import React from 'react';
import GlobalCommunity from './GlobalCommunity';

const ImpactSection = () => (
  <section className="py-20 px-4 max-w-7xl mx-auto" id="impact">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Global Impact
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        50+ countries reached
      </p>
    </div>

    {/* Map Section */}
    <div className="mb-8">
      <div className="text-center mb-4">
        <img
          src="/images/map.png"
          alt="Global reach map"
          className="w-full max-w-4xl mx-auto"
          style={{ background: 'transparent' }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Reaching <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">50+ Countries</span> Worldwide
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-left">
          As Makova continues to grow, we are proud to have reached over 50+ countries from around the world. What started as a simple so-called fitness app has evolved into a global movement that breaks the barriers that stop many teenagers from working out.
        </p>
      </div>
    </div>

    {/* Global Community Videos */}
    <div className="mb-16">
      <GlobalCommunity />
    </div>
  </section>
);

export default ImpactSection; 