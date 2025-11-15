import React from "react";
import Button from "../Button/Button";
import Services from "../Services/Services";

const ServicesSection = () => {
  return (
    // <!-- Services Section -->
    <section className="container" id="services">
      {/* <!-- Section Heading + Intro Text --> */}
      <div className="lg:w-1/2 mx-auto text-center mb-10">
        <h3 className="mb-4" data-animate="fade-in-left">
          Services we offer for you
        </h3>
        <p data-animate="fade-in-left">
          From design to marketing, we provide tailored services to grow your
          business faster and smarter.
        </p>
      </div>

      {/* <!-- Services Grid --> */}
      <Services />
      <div className="text-center mt-10">
        <Button data-animate="fade-in-left" href={"/services"}>
          View All Services
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
