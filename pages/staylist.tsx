import Footer from '@/components/Footer';
import InfoCard from '@/components/InfoCard';
import ProfileCard from '@/components/ProfileCard';
import Stay from '@/models/Stay';
import connectMongo from '@/utils/connectMongo';
import { BookmarkIcon, HomeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React from 'react';

const Staylist = ({ hotelResults }: any) => {
  const router = useRouter();
  console.log(hotelResults);

  return (
    <div>
      <header className="relative h-20 mt-2 flex justify-between">
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <BookmarkIcon className="text-black w-12 h-12 mx-2 sm:mx-6 bg-[#96CBBC] p-2 rounded-full" />
        </div>
        <ProfileCard />
      </header>
      {hotelResults.length > 0 ? (
        <main className="flex flex-col">
          <h1 className="flex-grow pt-4 px-2 sm:px-6 text-3xl font-semibold mt-2 mb-6">
            Stay List
          </h1>
          <section className="flex-grow pt-4 px-2 sm:px-6">
            <div className="flex justify-start flex-wrap">
              {hotelResults.map((results: any, i: any) => (
                <InfoCard
                  key={i}
                  title={results.title}
                  img={results.img}
                  location={results.location}
                  description={results.description}
                  star={results.star}
                  price={results.price}
                  total={results.total}
                  long={results.long}
                  lat={results.lat}
                />
              ))}
            </div>
          </section>
        </main>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="text-2xl font-bold z-[99] bg-white pt-12 mb-20">
            No Stays Saved :(
          </div>
          <video
            src="https://res.cloudinary.com/dbejjbpof/video/upload/v1680512600/next-booking/47956-area-map_pnebaw.mp4"
            loop
            muted
            autoPlay
            typeof="video/mp4"
            className="animate-bounce w-[24rem]"
          ></video>
        </div>
      )}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  await connectMongo();

  //get every stay
  let hotelResults = await Stay.find({}, { _id: 0 }).lean();

  return {
    props: { hotelResults },
  };
}
export default Staylist;
