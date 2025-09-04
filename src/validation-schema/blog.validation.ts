import * as Yup from "yup";

export const newBlogSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title cannot exceed 100 characters")
    .required("Title is required"),

  authorId: Yup.string()
    .email("Author must be a valid email")
    .required("Author is required"),

  imageUrl: Yup.string()
    .url("Must be a valid URL")
    .required("must be an image to display"),

  content: Yup.string()
    .min(20, "Content must be at least 20 characters")
    .required("Content is required"),
});

export const editBlogSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title cannot exceed 100 characters")
    .required("Title is required"),

  content: Yup.string()
    .min(20, "Content must be at least 20 characters")
    .required("Content is required"),

  imageUrl: Yup.string().url("Must be a valid URL").nullable(),
});
