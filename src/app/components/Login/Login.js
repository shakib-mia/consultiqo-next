"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

// export const generateMetadata = () => {
//   return {
//     title: "Login - Consultiqo",
//   };
// };

const Login = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);

  const options = [{ label: "Remember Me", value: "rememberme" }];

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.clientHeight);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.email.value, e.target.password.value);
  };

  return (
    <>
      <div
        // className="bg-primary-light"
        style={{
          paddingBlock: navbarHeight + "px",
        }}
      >
        <header className="container pt-24">
          <h1 className="text-center">Login</h1>
          <p className="text-center mt-4">
            To get started, you need to sign in here.
          </p>
        </header>
        <div className="container">
          <div className="lg:w-1/2 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="mt-4 md:mt-8 lg:mt-16 bg-white p-6 shadow-lg rounded-lg space-y-6"
            >
              <Input
                label="Email"
                name="email"
                placeholder="Enter Your Email Address Here"
              />
              <Input
                label="Password"
                placeholder="Enter Your Password Here"
                type="password"
                name="password"
              />
              <div className="flex justify-between flex-col lg:flex-row items-center gap-4">
                <Checkbox
                  name="myRadioGroup"
                  options={options}
                  value={rememberMe}
                  label={"Remember Me"}
                  onChange={(e) => setRememberMe(e)}
                />
                <Link href={"/reset-password"} className="text-primary">
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full py-3 font-bold tracking-wider"
              >
                Sign In
              </Button>
            </form>
          </div>

          <p className="mt-10 text-center text-xl">
            Don’t have an account?{" "}
            <Link
              className="text-primary underline hover:no-underline underline-offset-3"
              href={"/signup"}
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
