"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import { usePathname } from "next/navigation";
import SafeLink from "../SafeLink/SafeLink";

const Navbar = () => {
  const [phoneNav, showPhoneNav] = useState(false);
  const { scrollDirection, lastScrollY } = useScrollDirection();
  const pathname = usePathname();

  const isHome = pathname === "/";

  // 🔹 Navbar items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Plans", href: "/plans" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[99999] py-4 font-rubik transition-all duration-300
        ${scrollDirection === "down" ? "-translate-y-52" : "translate-y-0"}
        ${
          lastScrollY > 0
            ? "bg-white !text-black shadow-lg"
            : isHome
            ? "bg-transparent text-white shadow-none"
            : "!text-black bg-transparent shadow-none"
        }
      `}
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <SafeLink href="/" className="text-2xl font-gilroy-bold cursor-pointer">
          Consultiqo
        </SafeLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-normal">
          {navItems.map((item) => (
            <li key={item.href}>
              <SafeLink
                href={item.href}
                className={`${
                  item.href === pathname && "text-purple-600"
                } hover:text-purple-600`}
              >
                {item.name}
              </SafeLink>
            </li>
          ))}
        </ul>

        {/* CTA & Hamburger */}
        <div className="flex items-center">
          <Button className="!hidden md:!block" href="/login" target="_blank">
            Get Started
          </Button>

          <button
            className="md:hidden focus:outline-none ml-2"
            onClick={() => showPhoneNav(!phoneNav)}
          >
            {phoneNav ? (
              <svg
                className="w-6 h-6 fill-white hover:fill-primary"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
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
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden max-h-80 transition-[height] overflow-hidden ${
            phoneNav ? "h-96" : "h-0"
          }`}
        >
          <ul className="flex flex-col divide-y font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <SafeLink
                  href={item.href}
                  className="hover:text-purple-600 inline-block py-2 px-4 w-full"
                >
                  {item.name}
                </SafeLink>
              </li>
            ))}
            <li className="container py-3">
              <Button
                href="https://templatehearth.vercel.app/contact"
                target="_blank"
                className="inline-block w-full text-center"
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
