import Head from 'next/head';
import Banner from '@/components/Banner';
import SmallCard from '@/components/SmallCard';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Posts from '@/components/Posts';
import { LightBulbIcon, MapIcon } from '@heroicons/react/24/solid';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Reviews from '@/components/Reviews';
import smallCards from '@/lib/smallCards.json';
import posts from '@/lib/posts.json';
import reviews from '@/lib/reviews.json';

type Posts = {
  image: string;
  title: string;
};

type Item = {
  img: string;
  location: string;
};

export default function Home() {
  const data = smallCards.cards;
  const PostData = posts.posts;
  const ReviewData = reviews.reviews;
  return (
    <>
      <Head>
        <title>Planner</title>
        <meta name="description" content="Planner, Booking Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Banner />
      <main className="w-full">
        <section className="pt-4 px-8 xl:px-32 2xl:px-60 mx-auto">
          <h2 className="text-4xl font-semibold pb-1 text-neutral-800 flex items-center gap-2 flex-wrap">
            <MapIcon height={24} />
            <p className="text-[#96CBBC]">Popular</p>
            Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((item: Item, i: number) => (
              <>
                <SmallCard img={item.img} location={item.location} key={i} />
              </>
            ))}
          </div>
        </section>
        <div id="about" />
        <Services />
        <div className="bg-[#1D3557] py-12 mt-12">
          <Experience />
        </div>
        <div id="inspired" />
        <section className="mt-36 px-8 xl:px-32 2xl:px-60">
          <h2 className="text-4xl font-semibold pb-1 text-neutral-800 flex items-center gap-2">
            <LightBulbIcon height={24} />
            Get <p className="text-[#96CBBC]">Inspired</p>
          </h2>
          <p className="text-neutral-600">With Our Creators recent Posts</p>
          <Posts PostData={PostData} />
        </section>
        <div className="px-8 xl:px-32 2xl:px-60">
          <LargeCard
            img="https://res.cloudinary.com/dbejjbpof/video/upload/v1679377914/45326-travel_fdixxn.mp4"
            title="Find Your Next Trip"
            buttonText="Join Planner"
          />
        </div>
        <div id="reviews" />
        <Reviews ReviewData={ReviewData} />
      </main>
      <Footer />
    </>
  );
}
