import React from "react";

const Comment = ({data}) => {
  const {name, text} = data;
  return (
    <div className="flex items-center shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
      className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
