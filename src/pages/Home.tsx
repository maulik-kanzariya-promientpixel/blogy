import React from "react";
import Landing from "../components/UI/Landing";
import PopularBlogs from "../components/PopularBlogs";
import Reviews from "../components/Reviews";
const Home: React.FC = () => {
  return (
    <>
      <Landing />
      <PopularBlogs />
      <Reviews />
    </>
  );
};

export default Home;
