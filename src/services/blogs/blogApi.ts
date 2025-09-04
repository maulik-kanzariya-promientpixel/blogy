import type { IBlog, IBlogs } from "../../types/blogy.type";
import api from "../axios";

export const getAllPosts = async () => {
  const posts = await api.get("/blogs.json");
  return posts.data as IBlogs;
};

export const sendPost = async (newBlog: IBlog) => {
  const newPost = await api.post(`/blogs.json`, newBlog);
  return newPost.data as IBlog;
};

export const deletePost = async (id: string) => {
  const deletedPost = await api.delete(`/blogs/${id}.json`);
  return deletedPost.data;
};

export const getBlogById = async (id: string) => {
  const post = await api.get(`/blogs/${id}.json`);
  return post.data as IBlog;
};

export const updateBlog = async (id: string, updatedBlog: IBlog) => {
  const updatePost = await api.patch(`/blogs/${id}.json`, updatedBlog);
  return updatePost.data;
};
