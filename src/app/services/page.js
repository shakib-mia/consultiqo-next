import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const { data: services } = await axios.get(
    "https://templatehearth-be.onrender.com/services"
  );

  return (
    <div id="hm-wrapper">
      <div id="hm-content">
        <Head>
          <title>Our Services - Consultiqo</title>
          <meta
            name="description"
            content="Explore the wide range of services we offer at Consultiqo. From business consulting to digital marketing, our expert team is here to help your business thrive. Discover how we can support your growth and success."
          />
        </Head>
        <section className="container">
          <div className="lg:w-7/12 mx-auto text-center mt-24">
            <h1>Our Services</h1>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {services.map((service) => (
              <a
                href={
                  "https://templatehearth.vercel.app/services/" + service.slug
                }
                target="_blank"
                rel="noreferrer"
                className="border border-light rounded-xl overflow-hidden inline-block"
                data-animate="fade-in-up"
                key={service._id}
              >
                {/* <!-- Service Image --> */}
                <Image
                  width={300}
                  height={100}
                  className="w-full aspect-video object-cover"
                  src={service.image}
                  alt="Content Writing Service"
                />
                {/* <!-- Card Footer: Service Name + Arrow Icon --> */}
                <div className="p-4 flex justify-between items-center">
                  <p className="text-lg font-gilroy-regular">{service.title}</p>
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
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Page;
