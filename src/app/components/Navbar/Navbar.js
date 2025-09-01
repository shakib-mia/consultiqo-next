"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [phoneNav, showPhoneNav] = useState(false);
  const { scrollDirection, lastScrollY } = useScrollDirection();
  const pathname = usePathname();

  console.log();

  //   console.log();

  //   console.log(scrollDirection);

  return (
    // <!-- Navbar (fixed at the top) -->
    <nav
      className={`${
        scrollDirection === "down" ? "-translate-y-52" : "translate-y-0"
      } ${
        lastScrollY > 0
          ? "bg-white !text-black shadow-lg"
          : pathname === "/"
          ? "bg-transparent text-white"
          : "!text-black"
      } transition-all py-4 fixed top-0 left-0 w-full z-[99999] font-rubik`}
      id="navbar"
    >
      {/* <!-- Container: holds left and right parts of navbar --> */}
      <div className="flex items-center justify-between relative container">
        {/* <!-- Left Side: Logo and Navigation Links --> */}
        <div className="flex items-center space-x-6">
          {/* <!-- Logo --> */}
          <Link href="/" className="text-2xl font-gilroy-bold cursor-pointer">
            Consultiqo
          </Link>
        </div>
        {/* <!-- Desktop Navigation Menu --> */}
        <ul className="hidden md:flex space-x-6 font-normal">
          <li>
            <Link href="/" className="hover:text-purple-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-purple-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-purple-600">
              Features
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* <!-- Right Side: CTA Button and Hamburger Menu --> */}
        <div className="flex items-center">
          {/* <!-- Call-to-Action Button (only visible on desktop) --> */}
          <Button
            className={"hidden md:block"}
            href="https://templatehearth.vercel.app/contact"
            target="_blank"
          >
            Get Started
          </Button>

          {/* <!-- Hamburger Menu Button (only visible on mobile) --> */}
          <button
            id="menuBtn"
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => showPhoneNav(!phoneNav)}
          >
            {/* <!-- Hamburger Icon --> */}
            <svg
              id="menuIcon"
              className="w-6 h-6 fill-white hover:fill-primary"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>

            {/* <!-- Close Icon (hidden by default) --> */}
            <svg
              id="closeIcon"
              className="w-6 h-6 fill-white hover:fill-primary hidden"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* <!-- Mobile Navigation Menu --> */}
        <div
          id="mobileMenu"
          className={`${
            phoneNav ? "h-72" : "h-0"
          } absolute top-full left-0 w-full shadow-md md:hidden bg-white transition-[height] overflow-hidden`}
        >
          <ul className="flex flex-col pb-2 text-gray-700 font-medium divide-y font-gilroy-medium">
            {/* <!-- Mobile Nav Links --> */}
            <li>
              <Link
                href="/"
                className="container transition hover:text-white block py-3 hover:bg-primary"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="container transition hover:text-white block py-3 hover:bg-primary"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/features"
                className="container transition hover:text-white block py-3 hover:bg-primary"
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="container transition hover:text-white block py-3 hover:bg-primary"
              >
                Contact
              </Link>
            </li>

            {/* <!-- Mobile CTA Button --> */}
            <li className="container py-3">
              <Button
                href="https://templatehearth.vercel.app/contact"
                target="_blank"
                className={"inline-block text-center w-full"}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
