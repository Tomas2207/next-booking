import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Experience = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-8 mt-12 items-center">
      <div className="h-[24rem] lg:h-[36rem] w-[20rem] sm:w-[24rem] lg:w-[62rem] relative rounded-md overflow-hidden shadow-2xl shadow-[#96CBBC]">
        <video loop muted autoPlay className="h-full w-full object-cover ">
          <source
            src="https://res.cloudinary.com/dbejjbpof/video/upload/v1680665960/next-booking/pexels-rodnae-productions-8230808-1080x1920-30fps_g7juxh.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <p className="text-[#96CBBC] font-bold text-2xl">Why Choose Us?</p>
        <h2 className="text-neutral-800 text-4xl font-bold">
          Our Experience Talks By Itself
        </h2>
        <p className="text-neutral-600 text-2xl my-5">
          Our main priority has always been the user experience and comfort,
          while providing low prices and easy ways of looking for your next
          adventure
        </p>
        <div className="flex flex-col gap-6 sm:gap-2 sm:flex-row justify-around text-center">
          <div>
            <div className="text-4xl font-bold text-[#96CBBC] ">
              <CountUp end={30} delay={1} duration={5} enableScrollSpy />
            </div>
            <p className="text-neutral-600">Years of Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#96CBBC] ">
              <CountUp end={300} delay={1} duration={5} enableScrollSpy />+
            </div>
            <p className="text-neutral-600">Destinations Reached</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#96CBBC] ">
              <CountUp end={500} delay={1} duration={5} enableScrollSpy />
              k+
            </div>
            <p className="text-neutral-600">Satisfied Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
