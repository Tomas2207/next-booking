import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex items-center h-20 absolute z-[99]">
      <h2 className="mb-4 ml-4 sm:ml-8 font-bold text-2xl">Planner</h2>
      <ul className="text-white font-semibold flex gap-8 mx-auto">
        <li className="group cursor-pointer flex flex-col">
          <div>Home</div>
          <div className="nav-link" />
        </li>
        <li className="group cursor-pointer flex flex-col">
          <div>About</div>
          <div className="nav-link" />
        </li>
        <li className="group cursor-pointer flex flex-col">
          <div>Explore</div>
          <div className="nav-link" />
        </li>
      </ul>
      <button className="mr-4 sm:mr-8 px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition duration-150 ease-out">
        Sign Up
      </button>
    </header>
  );
};

export default Header;
