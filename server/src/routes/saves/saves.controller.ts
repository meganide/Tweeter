// import { Response, Request } from 'express';
// import { getLikes } from '../../models/likes.model.js';

// async function httpGetLikes(req: Request, res: Response) {
//   const postId = req.query.postId as string;

//   try {
//     const likes = await getLikes(postId);
//     console.log(likes);

//     return res.status(200).json(likes);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ error: 'Failed to get likes.' });
//   }
// }

// function httpAddLike() {}

// export { httpAddLike };
