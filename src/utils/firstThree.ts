export function getFirstThreeBlogs(blogs: Record<string, any>) {
  const blogEntries = Object.entries(blogs);
  const firstThree = blogEntries.slice(0, 3);

  // Convert back to object
  const newBlogs = Object.fromEntries(firstThree);

  return newBlogs;
}
