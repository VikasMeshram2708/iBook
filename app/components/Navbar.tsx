/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/moving-border';

export default function Navbar() {
  return (
    <nav className="navbar border-b-2 min-h-[8vh] shadow-[#8ff0a4] bg-base-100 font-Poppins">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm textGreen dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="font-Anta textGreen sm:text-[2rem] btn btn-ghost text-xl"
        >
          iBook
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal textGreen px-1">
          <li>
            <Link href="/about" className="sm:text-[.99rem]">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="sm:text-[.99rem]">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="sm:text-[.99rem]">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Borders are cool
        </Button> */}
        <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Lit up borders
        </div>
      </button>
        {/* <Link
          href="/"
          className="px-4 py-2 sm:text-[1.2rem] border-2 border-[#8ff0a4] rounded-md font-semibold textGreen hover:bg-[#8ff0a4] hover:text-black"
        >
          Sign In
        </Link> */}
      </div>
    </nav>
  );
}
