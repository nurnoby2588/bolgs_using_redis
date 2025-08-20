const redis = require('redis')
const client = redis.createClient(6379)
async function connectRedis() {
    try {
        await client.connect()
        console.log('Redis client connected');
    } catch (error) {
        console.log("Error connecting to Redis:", error);
    }
}
connectRedis()
module.exports = client