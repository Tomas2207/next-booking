import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      image:
        'https://res.cloudinary.com/dbejjbpof/image/upload/v1680586829/next-booking/pexels-ketut-subiyanto-4902013_etjpfd.jpg',
      title: 'How I traveled the world in one year',
    },
    {
      image:
        'https://res.cloudinary.com/dbejjbpof/image/upload/v1680586829/next-booking/pexels-gaetan-thurin-3163927_ga4bxh.jpg',
      title: 'Escaping the Ordinary',
    },
    {
      image:
        'https://res.cloudinary.com/dbejjbpof/image/upload/v1680586829/next-booking/pexels-te-lensfix-1371360_vkwjpg.jpg',
      title: 'The paradise you never...',
    },
    {
      image:
        'https://res.cloudinary.com/dbejjbpof/image/upload/v1680586834/next-booking/pexels-asad-photo-maldives-1591375_okarbc.jpg',
      title: 'Top 10 Destinations 2023',
    },
    {
      image:
        'https://res.cloudinary.com/dbejjbpof/image/upload/v1680586827/next-booking/pexels-zukiman-mohamad-22185_htmhbg.jpg',
      title: 'Capturing Every Moment',
    },
    {
      image:
        'https://res.cloudinary.com/dbejjbpof/image/upload/v1680586832/next-booking/pexels-roman-odintsov-5667030_ihhzo7.jpg',
      title: 'The joy of exploration',
    },
    {
      image:
        'https://res.cloudinary.com/dbejjbpof/image/upload/v1680586828/next-booking/pexels-kampus-production-5937267_qfzfxz.jpg',
      title: 'Love and Travel',
    },
  ]);
}
