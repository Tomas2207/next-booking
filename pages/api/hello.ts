// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      location: 'London',
      distance: '45 minute drive',
      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
  ]);
}
