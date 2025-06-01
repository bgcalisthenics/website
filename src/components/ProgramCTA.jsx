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



        {/* Price & Refund Policy Section */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 relative">
            "Is There A{' '}
            <span className="relative inline-block text-white">
              Money-Back-Guarantee
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#2fbfd7] opacity-30 -z-10"></span>
            </span>?"
          </h2>
          <div className="max-w-lg mx-auto mb-8 text-left">
            <p className="mb-4 text-gray-200 text-lg">Many people ask if there are refunds.</p>
            <p className="mb-4 text-gray-200 text-lg">So let me ask you this: Have you ever bought a journal, written one page, and then left it on your shelf?</p>
            <p className="mb-4 text-gray-200 text-lg">Most people have. But it's not because the journal didn't work, rather because they didn't use it long enough to see the change.</p>
            <p className="mb-4 text-gray-200 text-lg">The BG Method is just like that.</p>
            <p className="mb-4 text-gray-200 text-lg">You're not just buying random information, you're investing in something that only works if you put in the work.</p>
            <p className="mb-4 text-gray-200 text-lg">Everything is laid out in a clear roadmap, built on experience, tested by thousands, and designed to remove all the guesswork.</p>
            <p className="mb-4 text-gray-200 text-lg">But just like a journal won't rewrite your story for you, this plan won't help you achieve skills unless you show up for it.</p>
            <p className="mb-4 text-gray-200 text-lg">So no, there are no refunds — not because I want to be tough — but because transformation doesn't come with a receipt. It comes with your commitment.</p>
            <p className="mb-4 text-gray-200 text-lg">If that's something you're ready for, the BG Method is made for you.</p>
            <p className="mb-4 text-gray-200 text-lg">See you inside 💪</p>
          </div>

          {/* Start Now Button */}
          <div className="flex flex-col items-center justify-center mt-8 mb-8">
            <button
              className="button-primary relative w-[280px] h-[60px] flex items-center justify-center rounded-full shadow-2xl border-none outline-none"
              style={{
                fontWeight: 800,
                fontSize: '1.3rem',
                letterSpacing: '0.02em',
                textShadow: '0 2px 8px #000a',
                border: 'none',
                outline: 'none',
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                transition: 'none',
                transform: 'none'
              }}
            >
              <span className="font-black w-full text-center">START NOW</span>
            </button>

          </div>
          <div className="mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export default ProgramCTA; 