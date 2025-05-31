import React from 'react';
import { Link } from 'react-router-dom';

function ProgramCTA() {
  return (
    <div className="bg-[#10142c] pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="mb-12">
          <img 
            src="/images/hj.png" 
            alt="Calisthenics transformation" 
            className="w-full h-auto rounded-xl"
          />
          {/* Bullet Points */}
          <ul className="mt-8 space-y-4 text-left max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Send me a video of your exercise — push-ups, planche, muscle-up, etc.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">I'll personally analyze your form</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">..And then you will get custom feedback on what to work on next</span>
            </li>
          </ul>
          {/* ng.png Image */}
          <div className="mt-8 flex justify-center items-center">
            <img 
              src="/images/ng.png" 
              alt="Additional visual" 
              className="w-full h-auto rounded-xl mx-auto"
            />
          </div>
          {/* Bullet Points under ng.png */}
          <ul className="mt-8 space-y-4 text-left max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Join thousands of students in the community</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Post your form videos and get advice from other people</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">..And you can also ask any questions with people who have similar mindsets to you.</span>
            </li>
          </ul>
        </div>

        {/* Get Access Button */}
        <div className="flex flex-col items-center justify-center mb-12">
          <button
            className="button-primary relative w-[280px] h-[60px] flex items-center justify-center rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-none outline-none focus:ring-4 focus:ring-[#2fbfd7]/40"
            style={{
              fontWeight: 800,
              fontSize: '1.3rem',
              letterSpacing: '0.02em',
              textShadow: '0 2px 8px #000a',
              border: 'none',
              outline: 'none',
              WebkitBackdropFilter: 'blur(8px)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span className="font-black w-full text-center">GET ACCESS</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Start Your <span className="text-[#2fbfd7]">Calisthenics Journey</span> Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their strength and skills with the BG Method
          </p>
        </div>

        {/* Price & Refund Policy Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">Now, let's talk about price.</h2>
          <p className="mb-4">Many ask if I offer refunds.</p>
          <p className="mb-4">That's a fair thing to wonder.<br/>So let me ask you this:</p>
          <p className="mb-4">Have you ever bought a journal, wrote one page, and then left it on your shelf?</p>
          <p className="mb-4">Most people have.<br/>But it wasn't because the journal didn't work — it was because they didn't use it long enough to feel the change.</p>
          <p className="mb-4">This program? It's kind of like that.</p>
          <p className="mb-4">You're not just buying information — you're stepping into something that only works if you work it.</p>
          <p className="mb-4">It's a full roadmap. Built with experience, tested by thousands, and laid out to remove all the guesswork. But just like a journal won't rewrite your story for you, this plan won't build your body unless you show up for it.</p>
          <p className="mb-4">So no, we don't do refunds — not because we're trying to be tough — but because transformation doesn't come with a receipt. It comes with commitment.</p>
          <p className="mb-4">And if that's something you're ready for —<br/>I'll be right there with you inside the community.<br/>Let's get to it.</p>
        </div>
      </div>
    </div>
  );
}

export default ProgramCTA; 