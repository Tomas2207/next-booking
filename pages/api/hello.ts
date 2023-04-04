// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      location: 'Spain',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1680518194/next-booking/pexels-aleksandar-pasaric-1388030_dx5eak.jpg',
    },
    {
      location: 'Korea',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1680518192/next-booking/pexels-aleksandar-pasaric-2848492_y2kh5u.jpg',
    },
    {
      location: 'Italy',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1680518191/next-booking/pexels-pixabay-531602_elrb3v.jpg',
    },
    {
      location: 'Japan',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1680518193/next-booking/pexels-liger-pham-1108701_krre4x.jpg',
    },
  ]);
}
