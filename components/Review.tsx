import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  review: string;
  image: string;
  username: string;
};

const Review = ({ title, review, image, username }: Props) => {
  return (
    <div className="flex flex-col mx-4 px-6 h-[24rem] w-[21rem] hover:bg-[#96CBBC] p-4 rounded-md bg-neutral-800 transition duration-250 ease-out cursor-pointer group">
      <p className="font-bold mb-2 text-white text-lg group-hover:text-neutral-800">
        &quot;{title}&quot;
      </p>
      <p className="text-white font-light group-hover:text-neutral-700">
        {review}{' '}
      </p>
      <div className="flex items-end gap-2 mt-4 self-end justify-self-end relative bottom-0 flex-grow m-2">
        <div className="h-12 w-12 relative rounded-full overflow-hidden">
          <Image src={image} fill className="object-cover" alt="user" />
        </div>
        <p className="text-white group-hover:text-neutral-800">{username}</p>
      </div>
    </div>
  );
};

export default Review;
