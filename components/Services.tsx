import {
  ChatBubbleLeftRightIcon,
  GlobeAsiaAustraliaIcon,
  TagIcon,
  TicketIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-28 px-2 sm:px-8 xl:px-32 2xl:px-60">
      <div>
        <p className="text-[#96CBBC] font-bold text-2xl">What We Offer</p>
        <h2 className="text-neutral-800 text-4xl font-bold">
          Our Top Services For You
        </h2>
        <p className="text-neutral-600">
          The Benefits You Get When Using Planner
        </p>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
        <div className="flex flex-col items-center text-center">
          <GlobeAsiaAustraliaIcon height={52} className="text-[#96CBBC]" />
          <p className="font-bold my-1">Choose</p>
          <p className="text-neutral-600">Out of 400+ Destinations</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <ChatBubbleLeftRightIcon height={52} className="text-[#96CBBC]" />
          <p className="font-bold my-1">Support 24/7</p>
          <p className="text-neutral-600">
            For any question or help you may need
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TicketIcon height={52} className="text-[#96CBBC]" />
          <p className="font-bold my-1">Easy Booking</p>
          <p className="text-neutral-600">With Our New Fast-Booking Process</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
