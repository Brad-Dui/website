import { registerAs } from '@nestjs/config';

export const redisConfig = registerAs('redis', () => ({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
}));
