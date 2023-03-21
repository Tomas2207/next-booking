import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      title: 'Category',

      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      title: 'Category',

      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      title: 'Category',

      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
    {
      title: 'Category',

      img: 'https://res.cloudinary.com/dbejjbpof/image/upload/v1667428405/cld-sample-2.jpg',
    },
  ]);
}
