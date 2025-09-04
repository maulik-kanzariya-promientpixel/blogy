export interface IUser {
  name: string;
  email: string;
  joinedAt: number;
  password: string;
}

export interface IBlog {
  title: string;
  content: string;
  authorId: string;
  imageUrl: string;
  createdAt: number;
  updatedAt: number;
  likes: number;
  commentsCount: number;
}

export interface IComment {
  userId: string;
  text: string;
  createdAt: number;
}

export interface ICommentsByBlog {
  [commentId: string]: IComment;
}

export interface IBlogs {
  [blogId: string]: IBlog;
}

export interface IUsers {
  [userId: string]: IUser;
}

export interface IComments {
  [blogId: string]: ICommentsByBlog;
}

export interface IUserBlogs {
  [userId: string]: {
    [blogId: string]: true;
  };
}

export interface IBlogyDatabase {
  users: IUsers;
  blogs: IBlogs;
  comments: IComments;
  userBlogs: IUserBlogs;
}
