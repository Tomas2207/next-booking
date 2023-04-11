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

type Data = {
  data: Item[];
  cardData: CardItem[];
  PostData: Posts[];
  ReviewData: Review[];
  Iplocation: {
    city: string;
  };
};

type Posts = {
  image: string;
  title: string;
};

type Review = {
  title: string;
  review: string;
  image: string;
  name: string;
};

type Item = {
  img: string;
  location: string;
  distance: string;
};
type CardItem = {
  img: string;
  title: string;
};

export default function Home({
  data,
  cardData,
  Iplocation,
  PostData,
  ReviewData,
}: Data) {
  return (
    <>
      <Head>
        <title>Planner</title>
        <meta name="description" content="Planner, Booking Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-4">
          <h2 className="text-4xl font-semibold pb-1 text-neutral-800 flex items-center gap-2 flex-wrap">
            <MapIcon height={24} />
            <p className="text-[#96CBBC]">Popular</p>
            Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((item: Item, i: number) => (
              <>
                <SmallCard
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                  key={i}
                />
              </>
            ))}
          </div>
        </section>
        <div id="about" />
        <Services />
        <Experience />
        <div id="inspired" />
        <section className="mt-36">
          <h2 className="text-4xl font-semibold pb-1 text-neutral-800 flex items-center gap-2">
            <LightBulbIcon height={24} />
            Get <p className="text-[#96CBBC]">Inspired</p>
          </h2>
          <p className="text-neutral-600">With Our Creators recent Posts</p>
          <Posts PostData={PostData} />
        </section>

        <LargeCard
          img="https://res.cloudinary.com/dbejjbpof/video/upload/v1679377914/45326-travel_fdixxn.mp4"
          title="Find Your Next Trip"
          description="Planner Recommendations"
          buttonText="Get Inspired"
        />
        <div id="reviews" />
        <Reviews ReviewData={ReviewData} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const exploreResponse = await fetch('http://localhost:3000/api/hello');
  const data = await exploreResponse.json();

  const cardData = await fetch('http://localhost:3000/api/cards').then((res) =>
    res.json()
  );
  const PostData = await fetch('http://localhost:3000/api/posts').then((res) =>
    res.json()
  );
  const ReviewData = await fetch('http://localhost:3000/api/reviews').then(
    (res) => res.json()
  );

  // const Iplocation = await fetch(
  //   'https://ipinfo.io/json?token=4cf5770462499b'
  // ).then((res) => res.json());

  return {
    props: {
      data,
      cardData,
      PostData,
      ReviewData,
      // Iplocation,
    },
  };
}
