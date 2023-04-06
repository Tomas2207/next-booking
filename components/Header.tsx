import { BookmarkIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

const Header = () => {
  return (
    <header className="w-full flex items-center h-20 absolute z-[99]">
      <h2 className="mb-4 ml-4 sm:ml-8 font-bold text-2xl flex">
        <BookmarkIcon height={32} />
        Planner
      </h2>
      <ul className="hidden text-white font-semibold sm:flex gap-8 mx-auto">
        <li className="group cursor-pointer flex flex-col">
          <a href="#about">About</a>
          <div className="nav-link" />
        </li>
        <li className="group cursor-pointer flex flex-col">
          <a href="#inspired">Get Inspired</a>
          <div className="nav-link" />
        </li>
        <li className="group cursor-pointer flex flex-col">
          <a href="#reviews">Reviews</a>
          <div className="nav-link" />
        </li>
      </ul>
      <button className="mr-4 sm:mr-8 px-4 mb-3 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition duration-150 ease-out ml-auto sm:ml-0">
        Sign Up
      </button>
    </header>
  );
};

export default Header;
