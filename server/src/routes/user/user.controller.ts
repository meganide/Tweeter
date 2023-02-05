import { Response } from 'express';
import { getUser } from '../../models/user.model.js';

async function httpGetUser(req: any, res: Response) {
  let userId: string = req.user;

  if (req.params.userId) {
    userId = req.params.userId;
    console.log('userid from params', userId);
  }
  
  console.log('req.user is ', userId)

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
