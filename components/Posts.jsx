import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import settings from '../utils/settings';
import Image from 'next/image';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import PostCard from './PostCard';

const Posts = (props) => {
  const { PostData } = props;

  return (
    <div className="w-full py-6 bg-opacity-60 flex justify-center">
      <Slider {...settings} className="w-[95%]">
        {PostData.map((post, i) => (
          <PostCard key={i} title={post.title} image={post.image} />
        ))}
      </Slider>
    </div>
  );
};

export default Posts;
