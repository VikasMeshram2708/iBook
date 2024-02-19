'use client';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
export function Hero() {
  const words = [
    {
      text: 'Your',
    },
    {
      text: 'academic',
    },
    {
      text: 'success',
    },
    {
      text: 'is',
    },
    {
      text: 'within',
    },
    {
      text: 'reach',
    },
    {
      text: 'like',
    },
    {
      text: 'never',
    },
    {
      text: 'before',
    },
    {
      text: 'iBook.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] font-Poppins">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center">
        Start your journey with iBook today and elevate your learning experience
        to new heights.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Join Now
          </div>
        </button>
        <button className="w-40 h-12 rounded-md sm:text-[.95rem] sm:font-semibold bg-black border dark:border-white border-transparent text-white text-sm">
          Sign Up
        </button>
        {/* <button className="w-40 h-10 rounded-md sm:text-[.95rem] sm:font-semibold bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
      </div>
    </div>
  );
}
