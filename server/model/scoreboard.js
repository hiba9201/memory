const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
});

const getAsync = promisify(client.get).bind(client);
const keysAsync = promisify(client.keys).bind(client);
const setAsync = promisify(client.set).bind(client);

class Scoreboard {
    static async getScore() {
        const keys = await keysAsync('*');
        const data = {};

        await Promise.all(
            keys.map(async (key) => {
                data[key] = parseInt(await getAsync(key), 10);
            }),
        );

        return data;
    }

    static updateScore(updateData) {
        Object.entries(updateData).forEach(async (entry) => {
            const [key, value] = entry;
            if (typeof key === 'string') {
                await setAsync(key, value);
            }
        });
    }
}

module.exports = Scoreboard;
