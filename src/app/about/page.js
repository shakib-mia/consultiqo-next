import Image from "next/image";
import React from "react";
import about from "@/app/assets/images/about.jpg";
import coder1 from "@/app/assets/images/coders/Image 1.jpg";
import coder2 from "@/app/assets/images/coders/Image 2.jpg";
import coder3 from "@/app/assets/images/coders/Image 3.jpg";
import coder4 from "@/app/assets/images/coders/Image 4.jpg";
import Team from "../components/Team/Team";

export const metadata = {
  title: "About - Consultiqo",
  description: "Consulting Agency Full Site Kit",
};

const page = () => {
  return (
    <>
      <section className="container">
        <div className="lg:w-7/12 mx-auto text-center mt-24">
          <h1 data-animate="fade-in-left">Our story</h1>
          <p data-animate="fade-in-left" data-delay="100">
            We help businesses and individuals launch their consultancy journey
            quickly with smart solutions designed for success.
          </p>
        </div>

        <Image
          data-animate="fade-in-left"
          data-delay="200"
          src={about}
          alt="about"
          className="pt-10"
        />
      </section>

      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <h2 data-animate="fade-in-left" data-delay="100">
          We are here to help the customers to get their success.
        </h2>

        <aside className="space-y-4">
          <p data-animate="fade-in-right" data-delay="100">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand of service.{" "}
          </p>

          <p data-animate="fade-in-right" data-delay="100">
            Our strategies combine innovation and proven methods, helping
            clients achieve consistent growth and stay ahead in a competitive
            market. From websites to full-scale solutions, we make your ideas a
            reality without complexity.
          </p>
        </aside>
      </section>

      <section className="bg-primary-light !pt-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <aside className="grid grid-cols-2 gap-4">
            <div className="space-y-4 relative -top-11">
              <Image
                src={coder1}
                alt="coder1"
                className="w-full"
                data-animate="fade-in-left"
                data-delay="300"
              />
              <Image
                src={coder3}
                alt="coder3"
                className="w-full"
                data-animate="fade-in-left"
                data-delay="300"
              />
            </div>
            <div className="space-y-4">
              <Image
                src={coder2}
                alt="coder2"
                className="w-full"
                data-animate="fade-in-left"
                data-delay="100"
              />
              <Image
                src={coder4}
                alt="coder4"
                className="w-full"
                data-animate="fade-in-left"
                data-delay="100"
              />
            </div>
          </aside>
          <aside className="space-y-4">
            <h2 data-animate="fade-in-right">
              High skilled coders from worldwide.
            </h2>
            <p data-animate="fade-in-right">
              We share common trends and strategies for improving your rental
              income and making sure you stay in high demand of service.
            </p>

            <p data-animate="fade-in-right">
              Our global team of highly skilled coders brings diverse expertise
              to build scalable, secure, and efficient digital solutions that
              drive long-term success.
            </p>
          </aside>
        </div>
      </section>

      <Team />
    </>
  );
};

export default page;
