import React from "react";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
