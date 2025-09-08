import React from "react";
import { ScaleLoader } from "react-spinners";

export const metadata = {
  title: "Loading... - Consultiqo",
  description: "Consulting Agency Full Site Kit",
};

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <ScaleLoader size="150" color="#4f46e5" />
    </div>
  );
};

export default Loading;
