'use client';

import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      'At iBook, we understand the challenges students face when it comes to organizing and managing their lecture notes effectively. That is why we have created a platform dedicated to simplifying the way you organize, access, and share your vital lecture notes effortlessly.',
    name: 'Welcome to iBook - Your Ultimate Lecture Note Organizer',
    title: '~ iBook',
  },
  {
    quote:
      'At iBook, our mission is simple: to empower students worldwide by providing them with a seamless solution to streamline their academic lives. We believe that every student deserves access to tools that enhance their learning experience and make studying more efficient and enjoyable.',
    name: 'Our Mission',
    title: '~ iBook',
  },
  {
    quote:
      'With iBook, you can kiss goodbye to the days of scrambling through piles of papers and endless digital folders in search of that one crucial note. Our intuitive platform allows you to organize your lecture notes systematically, ensuring that you can find what you need when you need it.',
    name: 'What We Offer',
    title: '~ iBook',
  },
];
export function Carousel() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
