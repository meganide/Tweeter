import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { app } from './app.js';

const PORT = process.env.PORT || 8000;

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });

}

startServer();

export { prisma };
