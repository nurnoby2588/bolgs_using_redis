const redisClient = require("../client/client");
const Blog = require("../model/blogSchema");

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();
  const result = redisClient.set("h", 1);
  console.log(result);
  if (!blogs) {
    return res.status(404).json({ error: "No blogs found" });
  }
  res.status(200).json(blogs);
};

const createBlog = async (req, res) => {
  const blogData = req.body;
  const newBlog = await Blog.create(blogData);
  if (!newBlog) {
    return res.status(400).json({ error: "Failed to create blog" });
  }
  return res.status(201).json(newBlog);
};

module.exports = {
  getAllBlogs,
  createBlog,
};
