import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Service from "../components/Service/Service";
import { servicesCollection } from "../lib/mongodb";
import Services from "../components/Services/Services";

export const metadata = {
  title: "Services - Consultiqo",
  description: "Consulting Agency Full Site Kit",
};
const Page = async () => {
  return (
    <section className="container">
      <div className="lg:w-7/12 mx-auto text-center mt-24">
        <h1 data-animate="fade-in-left">Our Services</h1>
        <p data-animate="fade-in-left" data-delay="100">
          From strategy to execution, we provide tailored services that make
          your success simple and achievable.
        </p>
      </div>

      <Services route="/services" />
    </section>
  );
};

export default Page;
