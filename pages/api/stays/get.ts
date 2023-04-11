import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@/utils/connectMongo';
import User from '@/models/User';
import { getSession } from 'next-auth/react';
import Stay from '@/models/Stay';

export default async function addText(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mySession = await getSession({ req });

  try {
    await connectMongo();

    //get every stay
    const stays = await Stay.find();

    res.json({ stays });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
