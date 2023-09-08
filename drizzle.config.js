import { config } from 'dotenv';

config();

/** @type { import("drizzle-kit").Config } */
export default {
  schema: './src/db/schema.js',
  out: './src/db/drizzle',
  driver: 'turso',
  dbCredentials: {
    url: process.env.VITE_DATABASE_URL,
    authToken: process.env.VITE_DATABASE_AUTH_TOKEN,
  },
};
