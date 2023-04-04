import Image from 'next/image';
import Searchbar from './Searchbar';

const Banner = () => {
  return (
    <div className="relative flex justify-start items-center h-[700px] w-[100%] m-auto">
      <Image
        src="https://res.cloudinary.com/dbejjbpof/image/upload/v1680495320/next-booking/banner_dkv9in.jpg"
        fill
        alt="banner"
        className="object-cover z-[-1]"
      />
      <div className="w-[80%] lg:w-[60%] m-4 sm:m-8 mb-2">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-800 drop-shadow-xl z-[1]">
          Ready To Choose Your Next Adventure?
        </h1>
        <p className="font-light lg:text-xl text-neutral-800 drop-shadow-xl z-[1] mb-2">
          Stop delaying your search for happiness and start living your dreams
          now
        </p>
        <Searchbar />
      </div>
    </div>
  );
};

export default Banner;
