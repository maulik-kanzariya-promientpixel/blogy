import React, { startTransition, useOptimistic, useState } from "react";
import { setLikeById } from "../../services/blogs/likeApi";

const Like: React.FC<{ id: string; likes: number }> = ({ id, likes }) => {
  const [isLiked, setIsLiked] = useState(false);

  const [optimisticLikes, updateLikes] = useOptimistic(
    likes,
    (state, action: "inc" | "dec") => {
      return action === "inc" ? state + 1 : state - 1;
    }
  );

  const onLikeHandler = () => {
    if (!isLiked) {
      // Wrap optimistic update inside startTransition
      startTransition(() => {
        updateLikes("inc");
      });
      setIsLiked(true);

      // Server update
      startTransition(() => {
        setLikeById(id, optimisticLikes + 1);
      });
    } else {
      startTransition(() => {
        updateLikes("dec");
      });
      setIsLiked(false);

      startTransition(() => {
        setLikeById(id, optimisticLikes - 1);
      });
    }
  };

  return (
    <span
      onClick={onLikeHandler}
      className="inline-block transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg cursor-pointer"
    >
      {isLiked ? "❤️" : "🤍"} {optimisticLikes} Likes
    </span>
  );
};

export default Like;
