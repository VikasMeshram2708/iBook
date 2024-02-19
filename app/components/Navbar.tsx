'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const { status, data } = useSession();
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
              <Link href="/pages/about">About</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pages/privacy">Privacy Policy</Link>
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
            <Link href="/pages/about" className="sm:text-[.99rem]">
              About
            </Link>
          </li>
          <li>
            <Link href="/pages/contact" className="sm:text-[.99rem]">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/pages/privacy" className="sm:text-[.99rem]">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {status === 'unauthenticated' && (
          <button
            onClick={() => signIn('google')}
            type="button"
            className="p-[3px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Sign In
            </div>
          </button>
        )}
        {status === 'authenticated' && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  width={500}
                  height={500}
                  alt={data.user?.name!}
                  src={data.user?.image!}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 text-[#8ff0a4] rounded-box w-52"
            >
              <li>
                <Link href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => signOut()}
                  className="btn btn-sm rounded-md btn-error text-white"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
