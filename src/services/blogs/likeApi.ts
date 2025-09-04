import api from "../axios";

export const setLikeById = async (id: string, count: number) => {
  const newLikeCount = await api.put(`/blogs/${id}/likes.json`, count);
  console.log(newLikeCount.data);
};
