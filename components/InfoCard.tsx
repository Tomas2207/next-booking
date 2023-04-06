import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid, MapPinIcon } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/solid';

type Props = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: Props) => {
  return (
    <div className="flex flex-col py-7 md:px-4 borber-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out rounded-xl mx-auto">
      <div className="relative h-80 w-[21rem] flex-shrink-0">
        <Image
          src={img}
          fill
          alt="place"
          className="object-cover rounded-2xl"
        />
        <HeartIcon className="h-7 cursor-pointer absolute right-2 top-2" />
      </div>
      <div className="flex flex-col flex-grow py-5">
        <div className="flex justify-between pt-2 mb-2">
          <div className="flex gap-1">
            <MapPinIcon height={24} />
            <p>{location}</p>
          </div>

          <p className="flex items-center">
            <StarIcon className="h-5 text-[#96CBBC]" />
            {star}
          </p>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex items-center justify-starts pt-5 space-x-2">
          <p className="text-lg font-semibold">{price} Total</p>
          <p>|</p>
          <p className="text-right font-extralight">
            {parseFloat(total).toFixed(2)}/night
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
