const client = require("../client/client");
const Blog = require("../model/blogSchema");

const getAllBlogs = async (req, res) => {
  const result = await client.get("blogs");
  if(result){
    return res.status(200).json(JSON.parse(result));
  }
  const blogs = await Blog.find();
  if (!blogs) {
    return res.status(404).json({ error: "No blogs found" });
  }
  await client.setEx("blogs", 60, JSON.stringify(blogs))
  res.status(200).json(blogs);
};

const createBlog = async (req, res) => {
  const blogData = req.body;
  console.log(blogData)
  const newBlog = await Blog.create(blogData);
  if (!newBlog) {
    return res.status(400).json({ error: "Failed to create blog" });
  }
  await client.del("blogs"); // Invalidate cache
  return res.status(201).json(newBlog);
};

module.exports = {
  getAllBlogs,
  createBlog,
};
