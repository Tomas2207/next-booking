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
    const mySession = await getSession({ req });

    console.log('yepuser', mySession);
    //get every stay
    const stays = await Stay.find({ user: mySession?.user?.email });

    res.json({ stays });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export async function getStays() {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/stays/get`
  ).then((res) => res.json());
  return response;
}
