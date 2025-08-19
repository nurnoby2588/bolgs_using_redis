// import { createClient } from "redis";

// // Create a Redis client
// const redisClient = createClient({
//   socket: {
//     host: "127.0.0.1", // Redis host (your Docker instance)
//     port: 6379, // Redis port (default is 6379)
//   },
// });

// // Handle connection events
// redisClient.on("connect", () => {
//   console.log("Connected to Redis");
// });

// redisClient.on("error", (err) => {
//   console.error("Redis connection error:", err);
// });

// // Connect the client
// await redisClient.connect();

// // Test the connection
// try {
//   const reply = await redisClient.ping();
//   console.log("Ping response:", reply); // Should print "PONG"
// } catch (err) {
//   console.error("Ping failed:", err);
// }

// // Export the Redis client
// export default redisClient;
