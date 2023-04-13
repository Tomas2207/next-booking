import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

type Props = {
  img: string;
  location: string;
};

const SmallCard = ({ img, location }: Props) => {
  return (
    <div className="flex items-end m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out h-[12rem] overflow-hidden">
      {/* left */}
      <div className="absolute h-full w-full">
        <Image
          src={img}
          fill
          alt="location"
          className="rounded-lg object-cover"
        />
      </div>
      {/* right */}
      <div className="z-[99] bg-black w-full px-4 py-2 bg-opacity-60 flex gap-2">
        <MapPinIcon height={24} className="text-white" />
        <h2 className="text-white">{location}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
