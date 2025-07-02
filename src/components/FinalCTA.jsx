import React from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your 
              <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent"> Transformation</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teenagers worldwide who are building strength, confidence, and healthy habits from home. 
              Your fitness journey starts with a single step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">No gym required</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">AI-powered guidance</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Global community</span>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/train"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
            >
              <span>Start Training Now</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <p className="text-sm text-gray-500 mt-4">
              Free tools available immediately • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
