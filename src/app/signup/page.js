import React from "react";
import Signup from "../components/Signup/Signup";

export const generateMetadata = () => {
  return {
    title: "Signup - Consultiqo",
  };
};

const page = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default page;
