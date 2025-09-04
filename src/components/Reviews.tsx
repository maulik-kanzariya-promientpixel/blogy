import React from "react";

import dummyReviews from "../data/DummyReview";

const Reviews: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Users Say
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Real reviews from our amazing community of readers and bloggers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {review.name}
              </h3>

              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-sm sm:text-base">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
