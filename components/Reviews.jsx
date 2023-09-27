import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import settings from '../utils/settings';
import Image from 'next/image';
import {
  ArrowLongRightIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';
import PostCard from './PostCard';
import Review from './Review';

const Reviews = (props) => {
  const { ReviewData } = props;

  return (
    <div className="w-full py-6 bg-opacity-60 flex flex-col justify-center items-center mb-12 px-8 xl:px-32 2xl:px-60 ">
      <div className="self-start pb-1">
        <h2 className="text-4xl font-semibold pb-1 text-neutral-800 flex items-center gap-2">
          <PencilSquareIcon height={24} />
          Top
          <p className="text-[#96CBBC]">Reviews</p>
        </h2>
        <p className="text-neutral-600">Our Top Reviews of Planner</p>
      </div>
      <Slider {...settings} className="w-[95%] py-6">
        {ReviewData.map((review, i) => (
          <Review
            key={i}
            title={review.title}
            review={review.review}
            image={review.image}
            username={review.name}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
