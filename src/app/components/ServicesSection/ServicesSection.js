import React from "react";
import Button from "../Button/Button";
import Services from "../Services/Services";

const ServicesSection = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
        <Services />
      </div>
      <div className="text-center mt-10">
        <Button data-animate="fade-in-left" href={"/services"}>
          View All Services
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
