import Image from 'next/image';
import React from 'react';

type Props = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

const LargeCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <section className="relative my-12 bg-[#96CBBC] rounded-xl overflow-hidden">
      <div className="relative h-96 min-w-[300px]">
        <video
          src={img}
          className="hidden sm:block absolute right-0 h-full w-[50%] object-cover"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute top-32 left-4 sm:left-12 flex flex-col justify-center items">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:bg-gray-800">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
