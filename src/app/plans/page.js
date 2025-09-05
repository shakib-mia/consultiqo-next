import React from "react";
import Plans from "../components/Plans/Plans";

const Page = () => {
  return (
    <>
      <section className="container">
        <div className="lg:w-7/12 mx-auto text-center mt-24">
          <h1 data-animate="fade-in-left">Pricing & Plans</h1>
          <p data-animate="fade-in-left" data-delay="100">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
        </div>

        <Plans />
      </section>
    </>
  );
};

export default Page;
