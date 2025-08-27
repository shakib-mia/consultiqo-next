"use client";

import Image from "next/image";
import React, { useState } from "react";
import videoPlaceHolder from "@/app/assets/images/video-placeholder.jpg";

const Video = () => {
  const [video, showVideo] = useState(false);

  return (
    <>
      {video && (
        <div
          id="videoModal"
          className="fixed inset-0 z-[99999999999] flex items-center justify-center bg-[rgba(0,0,0,30%)]"
        >
          <div className="relative">
            {/* <!-- Close Button --> */}
            <button
              //   onclick="closeModal()"
              onClick={() => showVideo(false)}
              className="absolute -top-16 right-0 lg:-right-16 !bg-error !border-error hover:!bg-white hover:!text-error rounded-full w-12 flex justify-center items-center aspect-square text-black font-bold text-2xl"
            >
              ✕
            </button>

            {/* <!-- Video --> */}
            <iframe
              className="w-full aspect-[9/16]"
              id="iframe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              src={
                video
                  ? "https://www.youtube.com/embed/6BTOHtZkook?si=V2WY_k8IwmcoHL8v"
                  : ""
              }
            ></iframe>
          </div>
        </div>
      )}
      <aside className="relative" data-animate="fade-in-left">
        <Image
          src={videoPlaceHolder}
          alt="why should you choose us?"
          className="rounded-xl w-full aspect-video object-cover lg:aspect-square"
        />
        {/* <!-- Play Button --> */}
        <svg
          width="92"
          height="92"
          viewBox="0 0 92 92"
          fill="none"
          className="absolute left-0 top-0 right-0 bottom-0 m-auto cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          //   onclick="openModal()"
          onClick={() => showVideo(true)}
          data-animate="fade-in"
          data-delay="100"
        >
          <circle cx="46" cy="46" r="46" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.844 45.7232L40.4597 39.0415C40.3644 38.9856 40.2475 38.9862 40.1529 39.0432C40.0582 39.1002 39.9999 39.205 40 39.3183V52.6817C39.9999 52.795 40.0582 52.8998 40.1529 52.9568C40.2475 53.0138 40.3644 53.0144 40.4597 52.9585L51.844 46.2768C51.9404 46.2203 52 46.1146 52 46C52 45.8854 51.9404 45.7797 51.844 45.7232Z"
            className="fill-primary"
          />
        </svg>
      </aside>
    </>
  );
};

export default Video;
