import type { IComments } from "../../types/blogy.type";
import api from "../axios";

export const getCommentById = async (id: string) => {
  const comments = await api.get(`comments/${id}.json`);
  return comments.data as IComments;
};

export const addCommentById = async (
  postId: string,
  email: string,
  text: string
) => {
  const data = {
    userId: email,
    text,
    createdAt: Date.now(),
  };
  const newComment = await api.post(`/comments/${postId}.json`, data);
  return newComment;
};

export const removeComment = async (postId: string, commentId: string) => {
  const deletedComment = await api.delete(
    `/comments/${postId}/${commentId}.json`
  );
  return deletedComment.data;
};
