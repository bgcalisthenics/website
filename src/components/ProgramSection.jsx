import React from 'react';

function ProgramSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-blue to-secondary-blue bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the program that best fits your goals and current fitness level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Beginner Program',
              description: 'Perfect for those new to calisthenics',
              features: [
                'Basic strength foundations',
                'Proper form techniques',
                'Progressive workouts',
                'Nutrition guidance'
              ],
              price: '$49',
              popular: false
            },
            {
              title: 'Intermediate Program',
              description: 'Take your skills to the next level',
              features: [
                'Advanced techniques',
                'Skill progression',
                'Customized workouts',
                'Community access'
              ],
              price: '$79',
              popular: true
            },
            {
              title: 'Advanced Program',
              description: 'Master complex calisthenics skills',
              features: [
                'Expert-level techniques',
                'One-on-one coaching',
                'Custom program design',
                'Priority support'
              ],
              price: '$129',
              popular: false
            }
          ].map((program, index) => (
            <div 
              key={index}
              className={`relative bg-dark-card/50 backdrop-blur-lg rounded-xl border ${
                program.popular 
                  ? 'border-primary-blue shadow-lg shadow-primary-blue/20' 
                  : 'border-dark-border'
              } p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
              <p className="text-gray-400 mb-6">{program.description}</p>
              
              <div className="mb-8">
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-primary-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-4">{program.price}</div>
                <button className={`button-primary w-full py-3 px-6 rounded-lg font-bold transition-all duration-300`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
