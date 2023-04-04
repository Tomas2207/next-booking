import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1679459010/next-booking/hostel-private_xywofn.jpg',
      location: 'London',
      title: 'Private room in center London',
      description: '2 guests - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi',
      star: 4.3,
      price: '$40 / night',
      total: '$157/total',
      long: -0.095091,
      lat: 51.48695,
    },
    {
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1679459010/next-booking/hostel-private_xywofn.jpg',
      location: 'London',
      title: 'Private room in center London',
      description: '2 guests - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi',
      star: 4.3,
      price: '$40 / night',
      total: '$157/total',
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1679459010/next-booking/hostel-private_xywofn.jpg',
      location: 'London',
      title: 'Private room in center London',
      description: '2 guests - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi',
      star: 4.3,
      price: '$40 / night',
      total: '$157/total',
      long: -0.135638,
      lat: 51.521916,
    },
  ]);
}
