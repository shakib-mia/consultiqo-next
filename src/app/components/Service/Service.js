"use client";
import Image from "next/image";
import React from "react";
import SafeLink from "../SafeLink/SafeLink";

const Service = ({ slug, image, title, id }) => {
  return (
    <div data-animate="fade-in-up" data-delay={((id - 3) % 3) * 100}>
      <SafeLink
        href={"/services/" + slug}
        target="_blank"
        rel="noreferrer"
        className="border border-light rounded-xl overflow-hidden inline-block"
      >
        {/* <!-- Service Image --> */}
        <Image
          width={300}
          height={100}
          className="w-full aspect-video object-cover"
          src={image}
          alt="Content Writing Service"
        />
        {/* <!-- Card Footer: Service Name + Arrow Icon --> */}
        <div className="p-4 flex justify-between items-center">
          <p className="text-lg font-gilroy-regular">{title}</p>
          {/* <!-- Arrow Icon --> */}
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.99998H16"
              stroke="#161C2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 1L16 6L11 11"
              stroke="#161C2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </SafeLink>
    </div>
  );
};

export default Service;
