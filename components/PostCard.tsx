import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
};

const PostCard = ({ image, title }: Props) => {
  return (
    <div className="h-[20rem] w-[22rem] relative rounded-xl overflow-hidden cursor-pointer">
      <Image src={image} alt="post" fill className="object-cover" />
      <div className="absolute bottom-0 bg-neutral-800 w-full text-white bg-opacity-60 px-2 py-4">
        <h3 className="text-lg">{title}</h3>
        <div className="flex gap-2 items-center">
          <p className="font-light">Read More </p>
          <ArrowLongRightIcon height={20} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
