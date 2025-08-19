const express = require("express");
const blogRouter = require("./router/blogRouter");
const dbConnect = require("./db/connect")

const app = express();
const PORT = 9000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/blogs", blogRouter);
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
dbConnect();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
