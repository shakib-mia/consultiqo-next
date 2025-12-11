import React from "react";
import Login from "../components/Login/Login";

export const generateMetadata = () => {
  return {
    title: "Login - Consultiqo",
  };
};

const Page = () => {
  return <Login />;
};

export default Page;
