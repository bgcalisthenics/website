import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-20 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
        </div>

        {/* What is Makova */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What is Makova
          </h2>
          <p className="text-lg text-black leading-relaxed max-w-4xl">
            Makova is a calisthenics platform designed to empower teenagers to start their fitness journey right from home. Our mission is to eliminate the barriers that often prevent teens from accessing fitness resources, such as lack of equipment and gym access. Makova uses a ChatBot that relies on a custom database of @bgcalisthenics (Ben Gershenovich | The Founder), and pro calisthenics advice. The RepBot tracks the exercises and counts the repetitions of 7 exercises that users perform. These tools ensure that every teen, no matter their background or starting point, can receive guidance tailored specifically to them. Beyond workouts, Makova has a supportive community of like-minded teens from around the world. Users can share progress, exchange motivation, and track their development together. For those who upgrade to Makova Pro, the Pro version offers: Advanced skill progressions in calisthenics (e.g., push-ups to muscle-ups, handstands, front levers), access to exclusive content from elite athletes and trainers, and a private community. Whether you're a beginner looking to get started or an athlete pushing limits, Makova meets you where you are and helps you grow.
          </p>
        </div>

        {/* How Makova Started */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Makova Started
          </h2>
          <p className="text-lg text-black leading-relaxed max-w-4xl">
            Makova began as a simple idea in a bedroom: a teenager who believed that fitness should be accessible to everyone, regardless of their background, location, or resources. The lack of gym access and structured guidance for teens pushed the founder, Ben Gershenovich (@bgcalisthenics), to combine his passion for calisthenics with his knowledge of technology to create something new. What started as a personal project grew into a global platform, reaching 50+ countries. By integrating AI tools, building a supportive community, and focusing on real skill progressions, Makova was created as a movement to help the next generation connect with their health.
          </p>
        </div>

        {/* Meet the Founder */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Meet the Founder
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="/images/founder_logo.png"
                alt="Founder"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg h-80 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ben Gershenovich</h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Founder</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meet the founder, or better known as @bgcalisthenics in the social media space. Ben is a teen calisthenics athlete and innovator who turned his passion for movement into a goal to make fitness accessible for youth. With over 3 years of personal training experience, a deep understanding of calisthenics, and a growing online presence of over 350k+ followers, he created Makova to give teens the opportunity to work out and start their fitness journey. Ben is committed to helping the next generation grow stronger and excel in fitness.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>

          {/* Aidric */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/3">
              <img
                src="/images/OC_logo.png"
                alt="Operations Coordinator"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg h-80 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aidric Tschantz</h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Operations Coordinator</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Operations Coordinator ensures that every aspect of the Makova platform runs smoothly and efficiently. From managing user experience to coordinating development efforts, they play a crucial role in maintaining the high-quality service that our global community has come to expect.
              </p>
            </div>
          </div>

          {/* Jai */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="/images/jai.jpeg"
                alt="Content Specialist"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg h-80 object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jai Patel</h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Content Specialist</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Content Specialist focuses on creating and curating educational materials that help users understand proper form and technique. They ensure that all content meets our high standards for accuracy and accessibility.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
