import { Response } from 'express';
import { getMostRecentUsers, getRandomUsers, getUser, getUserByName } from '../../models/user.model.js';

async function httpGetUser(req: any, res: Response) {
  let userId: string = req.user;

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

  try {
    const user = await getMostRecentUsers();

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'There was an error getting most recent users.',
    });
  }
}

export { httpGetUser, httpGetUserByName, httpGetRandomUsers, httpGetMostRecentUsers };
