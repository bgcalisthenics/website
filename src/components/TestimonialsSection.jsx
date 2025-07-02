import React, { useState } from 'react';
import useInView from "../hooks/useInView";

const teenTestimonials = [
  {
    name: 'Emma, 16',
    location: 'California, USA',
    image: '/images/teen1.jpg',
    quote: 'I went from being the kid who hated PE to someone who actually looks forward to working out. My confidence has skyrocketed!',
    result: 'Lost 15 lbs, gained muscle',
    timeframe: '3 months',
    beforeAfter: { before: '/images/emma-before.jpg', after: '/images/emma-after.jpg' },
    rating: 5
  },
  {
    name: 'Marcus, 17',
    location: 'Texas, USA',
    image: '/images/teen2.jpg',
    quote: 'Finally found a workout program that fits my crazy schedule. 20 minutes a day and I am stronger than ever!',
    result: 'First pull-up achieved',
    timeframe: '6 weeks',
    beforeAfter: { before: '/images/marcus-before.jpg', after: '/images/marcus-after.jpg' },
    rating: 5
  },
  {
    name: 'Sophia, 15',
    location: 'Ontario, Canada',
    image: '/images/teen3.jpg',
    quote: 'The community is amazing! Having other teens cheer me on made all the difference. I never felt judged, only supported.',
    result: 'Improved flexibility 200%',
    timeframe: '2 months',
    beforeAfter: { before: '/images/sophia-before.jpg', after: '/images/sophia-after.jpg' },
    rating: 5
  },
  {
    name: 'Jake, 16',
    location: 'London, UK',
    image: '/images/teen4.jpg',
    quote: 'My grades improved because I had more energy and focus. My parents could not believe the change!',
    result: 'Better sleep & focus',
    timeframe: '1 month',
    beforeAfter: { before: '/images/jake-before.jpg', after: '/images/jake-after.jpg' },
    rating: 5
  }
];

const parentTestimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Mother of Emma (16)',
    location: 'California, USA',
    image: '/images/parent1.jpg',
    quote: 'As a parent, I was worried about Emma\'s self-esteem and health. SkillSurge gave her confidence and a healthy lifestyle. Worth every penny!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Father of Marcus (17)',
    location: 'Texas, USA',
    image: '/images/parent2.jpg',
    quote: 'Marcus was always on his phone. Now he actually asks to work out! The program is safe, effective, and age-appropriate.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Mother of Sophia (15)',
    location: 'Ontario, Canada',
    image: '/images/parent3.jpg',
    quote: 'The positive community and expert guidance gave me peace of mind. Sophia is happier and healthier than ever.',
    rating: 5
  }
];

const videoTestimonials = [
  {
    name: 'Alex, 17',
    thumbnail: '/images/video-thumb1.jpg',
    duration: '2:34',
    title: 'From Zero to Hero: My 6-Month Transformation'
  },
  {
    name: 'Maya, 16',
    thumbnail: '/images/video-thumb2.jpg',
    duration: '1:45',
    title: 'How SkillSurge Changed My Life'
  },
  {
    name: 'David, 15',
    thumbnail: '/images/video-thumb3.jpg',
    duration: '3:12',
    title: 'My First Handstand Journey'
  }
];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState('teens');
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2 });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-gray-50 -mt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        





      </div>
    </section>
  );
}
