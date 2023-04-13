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

  const { deleteId } = req.query;

  console.log(deleteId);

  try {
    await connectMongo();

    //get every stay
    const deletedStay = await Stay.findOneAndDelete({
      $and: [{ user: mySession?.user?.email }, { description: deleteId }],
    });

    res.json({ deletedStay });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
