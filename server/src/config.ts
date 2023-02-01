import dotenv from 'dotenv';

dotenv.config();

const config = {
  JSON_SECRET: process.env.JSON_SECRET || "1qhWLThHGFXa51mnVxgJdQ==",
};

export { config };
