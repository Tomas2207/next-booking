import Footer from '@/components/Footer';
import Searchbar from '@/components/Searchbar';
import InfoCard from '@/components/InfoCard';
import Map from '@/components/Map';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { BookmarkIcon, HomeIcon } from '@heroicons/react/24/solid';
import ProfileCard from '@/components/ProfileCard';

type Props = {
  searchResults: {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long: number;
    lat: number;
  }[];
};

const Search = ({ searchResults, hotelResults }: any) => {
  const router = useRouter();

  let { location, startDate, endDate, noOfGuests } = router.query;

  startDate = startDate?.toString();
  endDate = endDate?.toString();

  const formattedStartDate = format(new Date(startDate!), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate!), 'dd MMMM yy');

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  if (hotelResults.count === 0)
    return (
      <div className="overflow-hidden h-screen">
        <div className="relative h-20 mt-2 flex items-center ">
          <div className="cursor-pointer" onClick={() => router.push('/')}>
            <BookmarkIcon className="text-black w-12 h-12 mx-6 bg-[#96CBBC] p-2 rounded-full" />
          </div>
          <div className="w-full">
            <Searchbar placeholder={`${location} | ${range} | ${noOfGuests}`} />
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="text-2xl font-bold z-[99] bg-white pt-12 mb-20">
            No Results :(
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
      </div>
    );

  return (
    <div>
      <header className="relative h-20 mt-2 flex items-center ">
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <BookmarkIcon className="text-black w-12 h-12 mx-2 sm:mx-6 bg-[#96CBBC] p-2 rounded-full" />
        </div>
        <div className="w-[70%] mx-auto sm:w-[90%]">
          <Searchbar placeholder={`${location} | ${range} | ${noOfGuests}`} />
        </div>
        <ProfileCard />
      </header>
      <main className="flex">
        <section className="flex-grow pt-4 px-2 sm:px-6">
          <p className="text-xs">
            {hotelResults.count} Stays | {range} | {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="flex justify-start flex-wrap">
            {hotelResults.result.map((results: any, i: any) => (
              <InfoCard
                key={i}
                title={results.hotel_name}
                img={results.max_photo_url}
                location={results.city}
                description={results.address}
                star={results.review_score}
                price={`${
                  results.composite_price_breakdown.gross_amount.currency
                }  ${parseFloat(
                  results.composite_price_breakdown.gross_amount.value
                ).toFixed(2)}`}
                total={
                  results.composite_price_breakdown.gross_amount_per_night.value
                }
                long={results.longitude}
                lat={results.latitude}
              />
            ))}
          </div>
        </section>
        <section className="sticky top-0 lg:min-w-[600px] h-screen">
          <Map searchResults={hotelResults.result} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps({ query }: any) {
  const location = query.location;
  let startDate = query.startDate.split('T')[0];
  const endDate = query.endDate.split('T')[0];

  const url = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${location}&locale=en-us`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
    },
  };

  const searchResults = await fetch(url, options).then((res: any) =>
    res.json()
  );

  let hotelResults;

  if (searchResults[0] !== undefined) {
    const Hotelurl = `https://booking-com.p.rapidapi.com/v1/hotels/search?adults_number=2&dest_id=${searchResults[0].dest_id}&locale=en-us&checkin_date=${startDate}&filter_by_currency=USD&room_number=1&order_by=popularity&units=metric&dest_type=city&checkout_date=${endDate}&include_adjacency=true&children_number=2&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0&page_number=0`;

    hotelResults = await fetch(Hotelurl, options).then((res: any) =>
      res.json()
    );
  } else {
    hotelResults = { count: 0 };
  }

  return {
    props: {
      searchResults,
      hotelResults,
    },
  };
}
