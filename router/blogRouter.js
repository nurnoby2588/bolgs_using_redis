const express = require('express');
const { getAllBlogs, createBlog } = require('../controller/blogController');
const blogRouter = express.Router();
blogRouter.get('/',getAllBlogs)
blogRouter.post('/',createBlog)
module.exports = blogRouter;