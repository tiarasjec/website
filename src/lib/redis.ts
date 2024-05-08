import IORedis, { RedisOptions } from 'ioredis';

const options: RedisOptions = {
    maxRetriesPerRequest: null,
    connectTimeout: 10000,
    keepAlive: 1000,
    tls: {
        rejectUnauthorized: false,
    }
}

export const connection = new IORedis(process.env.REDIS_KV!, options);

connection.once("connect", () => {
    console.log('Connected to Redis');
});

connection.on("error", (error) => {
    console.error('Redis error:', error);
});
