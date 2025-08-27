import Image from "next/image";
import React from "react";
import Video from "../Video/Video";

const Features = () => {
  //   let video;
  return (
    // <!-- Why Choose Section -->
    <section className="bg-[#F4F7FA]" id="features">
      <div className="container">
        {/* <!-- Section Heading & Intro --> */}
        <div className="lg:w-1/2 mx-auto text-center">
          <h3 className="lg:mb-4" data-animate="fade-in-left">
            Why you should choose us?
          </h3>
          <p data-animate="fade-in-left">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        {/* <!-- Content Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 gap-7 items-center">
          {/* <!-- Left Column: Video Placeholder with Play Button --> */}
          <Video />

          {/* <!-- Right Column: Features List --> */}
          <aside>
            <ul className="space-y-4 lg:space-y-7">
              {/* <!-- Feature Item 1 --> */}
              <li
                className="flex items-start gap-4"
                data-animate="fade-in-right"
                data-delay="100"
              >
                {/* <!-- Number Icon --> */}
                <div className="w-1/10 aspect-square bg-light/20 rounded-full flex justify-center items-center text-primary">
                  1
                </div>
                {/* <!-- Text Content --> */}
                <aside className="w-9/10">
                  <h6>Easy Booking</h6>
                  <p className="mt-2 lg:mt-4">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </p>
                </aside>
              </li>

              {/* <!-- Feature Item 2 --> */}
              <li
                className="flex items-start gap-4"
                data-animate="fade-in-right"
                data-delay="200"
              >
                <div className="w-1/10 aspect-square bg-light/20 rounded-full flex justify-center items-center text-primary">
                  2
                </div>
                <aside className="w-9/10">
                  <h6>Free Expert Opinion</h6>
                  <p className="mt-2 lg:mt-4">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </p>
                </aside>
              </li>

              {/* <!-- Feature Item 3 --> */}
              <li
                className="flex items-start gap-4"
                data-animate="fade-in-right"
                data-delay="300"
              >
                <div className="w-1/10 aspect-square bg-light/20 rounded-full flex justify-center items-center text-primary">
                  3
                </div>
                <aside className="w-9/10">
                  <h6>Get Your Results</h6>
                  <p className="mt-2 lg:mt-4">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </p>
                </aside>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Features;
