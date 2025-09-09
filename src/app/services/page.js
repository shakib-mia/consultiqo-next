import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Service from "../components/Service/Service";

export const metadata = {
  title: "Services - Consultiqo",
  description: "Consulting Agency Full Site Kit",
};

const Page = async () => {
  const { data: services } = await axios.get(
    "https://templatehearth-be.onrender.com/services"
  );

  return (
    // <div id="hm-wrapper">
    //   <div id="hm-content">

    <section className="container">
      <div className="lg:w-7/12 mx-auto text-center mt-24">
        <h1 data-animate="fade-in-left">Our Services</h1>
        <p data-animate="fade-in-left" data-delay="100">
          From strategy to execution, we provide tailored services that make
          your success simple and achievable.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-0">
        {services.map((service, key) => (
          <Service {...service} key={key} id={key} />
        ))}
      </section>
    </section>
    //   </div>
    // </div>
  );
};

export default Page;
