import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { NavLink } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="flex justify-center items-center w-1/2 h-full">
        <p className="text-4xl w-full ml-10">
          Dive Into Ideas. Experience Them with
          <span className="p-4 text-9xl text-blue-600 ml-10">Blogy</span>
          <button className="mt-10 ml-10 text-2xl bg-blue-500 hover:bg-blue-400 text-white font-semibold p-2 rounded-lg transition-all duration-300 shadow-lg">
            <NavLink to="/blogs">Unfold Ideas</NavLink>
          </button>
        </p>
      </div>
      <div className="w-1/2 h-full">
        <DotLottieReact src="/Blog post.json" loop autoplay />
      </div>
    </div>
  );
};

export default Landing;
