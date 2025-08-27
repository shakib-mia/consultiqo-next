import React from "react";
import bg from "@/app/assets/images/BG.jpg";

const Header = () => {
  return (
    //   <!-- Hero Section -->
    <header
      style={{ backgroundImage: `url(${bg.src})` }}
      className="w-screen bg-cover bg-[75%] lg:bg-[center_bottom] bg-no-repeat"
      id="header"
    >
      {/* <!-- Overlay: Dark-to-transparent gradient --> */}
      <div className="bg-gradient-to-r from-dark to-transparent py-36 lg:pt-52 lg:pb-36 text-white">
        <div className="container">
          {/* <!-- Hero Content (Text + CTA) --> */}
          <div className="lg:w-1/2">
            {/* <!-- Hero Heading --> */}
            <h1 data-animate="fade-in-left">
              Get help from the expert consultants.
            </h1>

            {/* <!-- Hero Description --> */}
            <p
              className="py-4 lg:py-8"
              data-animate="fade-in-left"
              data-delay="100"
            >
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </p>

            {/* <!-- Call-to-Action Button --> */}
            <a
              href="https://templatehearth.vercel.app/"
              data-animate="fade-in-left"
              data-delay="400"
              className="button inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
