import { BookmarkIcon } from '@heroicons/react/24/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

const Header = () => {
  const { data: session } = useSession();

  const [showMenu, setShowMenu] = useState(false);
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
      <div className="ml-auto sm:ml-0 mb-4">
        <ProfileCard />
      </div>
    </header>
  );
};

export default Header;
