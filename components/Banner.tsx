import Image from 'next/image';
import Searchbar from './Searchbar';
import { useEffect, useState } from 'react';

const Banner = () => {
  const imageUrls = [
    'https://res.cloudinary.com/dbejjbpof/image/upload/v1680495320/next-booking/banner_dkv9in.jpg',
    'https://res.cloudinary.com/dbejjbpof/image/upload/v1695814551/next-booking/booking2_pqclrf.jpg',
    'https://res.cloudinary.com/dbejjbpof/image/upload/v1695814667/next-booking/booking3_faiows.jpg',
  ];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImg((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="relative flex justify-start items-center h-[700px] w-[100%] m-auto overflow-hidden">
      {/* <Image
        src="https://res.cloudinary.com/dbejjbpof/image/upload/v1680495320/next-booking/banner_dkv9in.jpg"
        fill
        alt="banner"
        className="object-cover z-[-1]"
      /> */}
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentImg === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="w-[80%] lg:w-[60%] m-4 sm:m-8 mb-2">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-800 drop-shadow-xl z-[1]">
          Ready To Choose Your Next Adventure?
        </h1>
        <p className="font-normal lg:text-xl text-neutral-800 drop-shadow-xl z-[1] mb-2">
          Stop delaying your search for happiness and start living your dreams
          now
        </p>
        <Searchbar />
      </div>
    </div>
  );
};

export default Banner;
