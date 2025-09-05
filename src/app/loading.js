import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <ScaleLoader size="150" color="#4f46e5" />
    </div>
  );
};

export default Loading;
