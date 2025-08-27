import Image from "next/image";
import React from "react";
import bg1 from "../../assets/images/services/BG Copy-1.jpg";
import bg2 from "../../assets/images/services/BG Copy-2.jpg";
import bg3 from "../../assets/images/services/BG Copy-3.jpg";
import bg4 from "../../assets/images/services/BG Copy-4.jpg";

const Services = () => {
  const services = [];

  return (
    // <!-- Services Section -->
    <section className="container" id="services">
      {/* <!-- Section Heading + Intro Text --> */}
      <div className="lg:w-1/2 mx-auto text-center">
        <h3 className="mb-4" data-animate="fade-in-left">
          Services we offer for you
        </h3>
        <p data-animate="fade-in-left">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      {/* <!-- Services Grid --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
        {/* <!-- Service Card 1 --> */}
        <a
          href="#"
          className="border border-light rounded-xl overflow-hidden inline-block"
          data-animate="fade-in-up"
        >
          {/* <!-- Service Image --> */}
          <Image
            width={300}
            height={100}
            className="w-full"
            src={bg1.src}
            alt="Content Writing Service"
          />
          {/* <!-- Card Footer: Service Name + Arrow Icon --> */}
          <div className="p-4 flex justify-between items-center">
            <p className="text-lg font-gilroy-regular">Content Writing</p>
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
        </a>

        {/* <!-- Service Card 2 --> */}
        <a
          href="#"
          className="border border-light rounded-xl overflow-hidden inline-block"
          data-animate="fade-in-up"
          data-delay="100"
        >
          <Image
            width={300}
            height={100}
            className="w-full"
            src={bg2.src}
            alt="Graphic Design Service"
          />
          <div className="p-4 flex justify-between items-center">
            <p className="text-lg font-gilroy-regular">Graphic Design</p>
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
        </a>

        {/* <!-- Service Card 3 --> */}
        <a
          href="#"
          className="border border-light rounded-xl overflow-hidden inline-block"
          data-animate="fade-in-up"
          data-delay="200"
        >
          <Image
            width={300}
            height={100}
            className="w-full"
            src={bg3.src}
            alt="SEO for Business Service"
          />
          <div className="p-4 flex justify-between items-center">
            <p className="text-lg font-gilroy-regular">SEO for Business</p>
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
        </a>

        {/* <!-- Service Card 4 --> */}
        <a
          href="#"
          className="border border-light rounded-xl overflow-hidden inline-block"
          data-animate="fade-in-up"
          data-delay="300"
        >
          <Image
            width={300}
            height={100}
            className="w-full"
            src={bg4.src}
            alt="Digital Marketing Service"
          />
          <div className="p-4 flex justify-between items-center">
            <p className="text-lg font-gilroy-regular">Digital Marketing</p>
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
        </a>
      </div>
    </section>
  );
};

export default Services;
