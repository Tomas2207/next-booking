import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative flex justify-end text-end h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-[100%]">
      <video
        src="https://res.cloudinary.com/dbejjbpof/video/upload/v1679375026/bannerVideo_lxdzbh.mp4"
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover z-[-1]"
      />
      <div className="w-[100%] xl:w-[60%] m-8">
        <h1 className="font-bold sm:text-6xl lg:text-8xl text-neutral-800 z-[1]">
          Ready To Choose Your Next Adventure?
        </h1>
        <button className="text-neutral-900 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m Ready
        </button>
      </div>
    </div>
  );
};

export default Banner;
