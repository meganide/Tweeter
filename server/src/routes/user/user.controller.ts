import { Response } from 'express';
import { getUser } from '../../models/user.model.js';

async function httpGetUser(req: any, res: Response) {
  let userId: string;

  if (req.body.userId) {
    userId = req.body.userId;
  } else {
    userId = req.user;
  }

  try {
    const user = await getUser(userId);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error getting user.',
    });
  }
}


export { httpGetUser };
