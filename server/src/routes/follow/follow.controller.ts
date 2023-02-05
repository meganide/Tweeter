import { Response } from 'express';
import { follow, unfollow } from '../../models/follow.model.js';

async function httpFollow(req: any, res: Response) {
  const followerUserId: string = req.user;
  const followedUserId = req.query.followedUserId as string;

  try {
    const follower = await follow(followerUserId, followedUserId);

    return res.status(200).json(follower);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to follow.' });
  }
}

async function httpUnfollow(req: any, res: Response) {
  const followerUserId: string = req.user;
  const followedUserId = req.query.followedUserId as string;

  try {
    const follower = await unfollow(followerUserId, followedUserId);

    return res.status(200).json(follower);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to unfollow.' });
  }
}

export { httpFollow, httpUnfollow };
