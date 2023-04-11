import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@/utils/connectMongo';
import User from '@/models/User';
import { getSession } from 'next-auth/react';
import Stay from '@/models/Stay';

export default async function addText(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();

    const newStay = Stay.create(req.body);

    res.json({ newStay });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
