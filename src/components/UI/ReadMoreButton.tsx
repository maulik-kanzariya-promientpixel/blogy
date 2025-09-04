import React from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const ReadMoreButton: React.FC<{ id: string }> = ({ id }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate(`/blog/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <button
      onClick={onClickHandler}
      className="text-white bg-gray-800 hover:bg-gray-900 px-3 py-1 rounded-md text-sm transition"
    >
      Read More
    </button>
  );
};

export default ReadMoreButton;
