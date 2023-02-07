import { Response } from 'express';
import { editUserProfile, getMostRecentUsers, getRandomUsers, getUser, getUserByName } from '../../models/user.model.js';

async function httpGetUser(req: any, res: Response) {
  let userId: string = req.user;

  try {
    const user = await getUser(userId);

    console.log('received user', user)

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error getting user.',
    });
  }
}

async function httpGetUserByName(req: any, res: Response) {
  let name: string = req.params.name;

  try {
    const user = await getUserByName(name);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error getting user.',
    });
  }
}

async function httpGetRandomUsers(req: any, res: Response) {
  const userId: string = req.user;
  let amount: number = parseInt(req.query.amount);

  try {
    const user = await getRandomUsers(userId, amount);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error getting users.',
    });
  }
}

async function httpGetMostRecentUsers(req: any, res: Response) {
  const userId: string = req.user;

  try {
    const user = await getMostRecentUsers(userId);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error getting most recent users.',
    });
  }
}

async function httpEditUserProfile(req: any, res: Response) {
  const userId: string = req.user;
  const payload = req.body;

  try {
    const updatedUser = await editUserProfile(userId, payload);

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error updating user profile!',
    });
  }
}

export { httpGetUser, httpGetUserByName, httpGetRandomUsers, httpGetMostRecentUsers, httpEditUserProfile };
