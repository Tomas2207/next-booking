import Image from 'next/image';
import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

type Props = {
  title: string;
  review: string;
  image: string;
  username: string;
};

const Review = ({ title, review, image, username }: Props) => {
  return (
    <div className="flex flex-col mx-auto px-6 h-[24rem] w-[21rem] hover:bg-[#96CBBC] p-4 rounded-md bg-[#1D3557] transition duration-250 ease-out cursor-pointer group relative">
      <div className="flex flex-col items-center gap-2 mt-1 justify-center relative m-2">
        <div className="h-28 w-28 relative rounded-full">
          <Image
            src={image}
            fill
            className="object-cover rounded-full"
            alt="user"
          />
          <div className="bg-white absolute bottom-0 right-0 h-8 w-8 rounded-full">
            <CheckBadgeIcon height={32} color="#1D3557" className="" />
          </div>
        </div>
        <p className="text-white group-hover:text-neutral-800 italic">
          {username}
        </p>
      </div>
      <p className="font-bold mb-2 text-white text-lg group-hover:text-neutral-800">
        &quot;{title}&quot;
      </p>
      <p className="text-white font-light group-hover:text-neutral-700">
        {review}{' '}
      </p>
    </div>
  );
};

export default Review;
