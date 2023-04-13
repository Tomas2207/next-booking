import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

type Range = {
  selection: {
    startDate: Date;
    endDate: Date;
  };
};

type Props = {
  placeholder?: string;
};

const Searchbar = ({ placeholder }: Props) => {
  const [searchInput, setSearchInput] = useState<string>();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
    setSearchInput('');
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="shadow-md bg-white rounded-xl p-2 relative">
      {/* Middle Search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={'Start your search'}
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400 sm:hidden"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input
          type="text"
          placeholder={placeholder || 'Start your search'}
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400 hidden sm:inline-flex"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {searchInput ? (
        <div className="hidden md:flex flex-col col-span-3 mx-auto mt-3 z-[55] shadow-xl absolute">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#96CBBC']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b pb-4 bg-white shadow-xl px-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(parseInt(e.target.value))}
            />
          </div>
          <div className="flex bg-white py-2 shadow-xl">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput('')}
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-white font-bold bg-[#96CBBC] mx-2 p-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      ) : null}
      {/* Date Range */}
      {searchInput ? (
        <div className="flex md:hidden flex-col col-span-3 mx-auto mt-3 z-[55] shadow-xl absolute left-0">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#96CBBC']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b pb-4 bg-white shadow-xl px-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(parseInt(e.target.value))}
            />
          </div>
          <div className="flex bg-white py-2 shadow-xl">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput('')}
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-white font-bold bg-[#96CBBC] mx-2 p-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
