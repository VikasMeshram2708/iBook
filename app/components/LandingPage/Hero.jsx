'use client';
import { signIn, useSession } from 'next-auth/react';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';

export function Hero() {
  const { status, data } = useSession();
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
        {status === 'unauthenticated' && (
          <>
            <button onClick={() => signIn('google')} className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Join Now
              </div>
            </button>
            <button onClick={() => signIn('google')} className="w-40 h-12 rounded-md sm:text-[.95rem] sm:font-semibold bg-black border dark:border-white border-transparent text-white text-sm">
              Sign Up
            </button>
          </>
        )}
        {status === 'authenticated' && (
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Currently logged in as
            <span className="uppercase font-bold mx-2">{data.user.name}</span>
          </button>
        )}
      </div>
    </div>
  );
}
