import { useBlogs } from "../hooks/useBlogs";
import BlogList from "./UI/BlogList";
import { getFirstThreeBlogs } from "../utils/firstThree";

const PopularBlogs: React.FC = () => {
  const { blogs } = useBlogs();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Choose Blogy?
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the most popular blogs and insights from our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogList blogs={getFirstThreeBlogs(blogs)} />
        </div>
      </div>
    </section>
  );
};

export default PopularBlogs;
