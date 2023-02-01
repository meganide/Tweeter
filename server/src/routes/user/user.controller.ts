import { Response } from 'express';
import { getUserById } from '../../models/user.model.js';

async function httpGetUserById(req: any, res: Response) {
  const userId: string = req.user;
  try {
    const user = await getUserById(userId);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error getting user.',
    });
  }
}

export { httpGetUserById };
