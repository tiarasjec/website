import IORedis, { RedisOptions } from 'ioredis';

const options: RedisOptions = {
    maxRetriesPerRequest: null,
    tls: {
        rejectUnauthorized: false,
    }
}

export const connection = new IORedis(process.env.REDIS_KV!, options);

connection.once("connect", () => {
    console.log('Connected to Redis');
});