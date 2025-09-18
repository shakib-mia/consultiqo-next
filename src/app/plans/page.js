import React from "react";
import Plans from "../components/Plans/Plans";
import Faq from "../components/Faq/Faq";

const Page = () => {
  return (
    <>
      <div className="container pt-14 lg:pt-20">
        <div className="lg:w-7/12 mx-auto text-center mt-24">
          <h1 data-animate="fade-in-left">Pricing & Plans</h1>
          <p data-animate="fade-in-left" data-delay="100">
            Choose a plan that perfectly fits your needs—flexible, transparent,
            and carefully designed to help your business grow faster.
          </p>
        </div>

        <Plans />

        <Faq />
      </div>
    </>
  );
};

export default Page;
