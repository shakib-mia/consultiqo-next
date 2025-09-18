import React from "react";
import consultancyBg from "./../../assets/images/consultancy-bg.png";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Contact = () => {
  return (
    // <!-- Get Consultancy Section -->
    <section
      className="bg-cover !py-0"
      style={{ backgroundImage: `url(${consultancyBg.src})` }}
      id="contact"
    >
      {/* <!-- Overlay with semi-transparent black background --> */}
      <div className="bg-black/75 py-14 lg:py-20 text-white">
        <div className="container">
          {/* <!-- Two-column layout: info on left, form on right --> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* <!-- Left side: info and SVG icon --> */}
            <aside>
              {/* <!-- SVG icon with light green play-like shape --> */}
              <svg
                width="87"
                height="87"
                viewBox="0 0 87 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-animate="fade-in"
              >
                <circle
                  opacity="0.0786365"
                  cx="43.5"
                  cy="43.5"
                  r="43.5"
                  fill="white"
                />
                <path
                  d="M44 28C34.0609 28 26 34.4762 26 42.4762C26 50.4762 34.0609 56.9524 44 56.9524C45.5652 56.9524 47.2087 56.8 48.7739 56.419L57.7739 59.9238C57.8522 59.9238 57.9304 60 58.087 60C58.2435 60 58.4 59.9238 58.5565 59.8476C58.7913 59.6952 58.8696 59.3905 58.8696 59.1619L58.0087 51.5429C60.5913 49.0286 62 45.7524 62 42.4762C62 34.4762 53.9391 28 44 28Z"
                  fill="#68D585"
                />
              </svg>

              {/* <!-- Heading --> */}
              <h3 className="pt-4 lg:pt-12 pb-4" data-animate="fade-in-left">
                Get a free consultancy from our expert right now!
              </h3>

              {/* <!-- Description --> */}
              <p data-animate="fade-in-left">
                Get expert guidance today—book your free consultancy session and
                take the first step toward success.
              </p>
            </aside>

            {/* <!-- Right side: consultancy form --> */}
            <form
              className="bg-white p-7 rounded-lg text-black space-y-6"
              action="#"
              data-animate="fade-in"
            >
              <div className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="i.e. John Doe"
                  required
                  label="name"
                  data-animate="fade-in-right"
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="i.e. john@mail.com"
                  required
                  data-animate="fade-in-right"
                />

                <Input
                  label="Phone"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="i.e. 123-456-7890"
                  required
                  data-animate="fade-in-right"
                />

                {/* <!-- Service select --> */}
                <div className="space-y-2" data-animate="fade-in-right">
                  <label className="inline-block font-bold" htmlFor="service">
                    Which service do you need?
                  </label>
                  <select
                    className="border border-light w-full py-3 px-5 rounded-lg focus:outline-none"
                    name="service"
                    id="service"
                    required
                  >
                    <option value={"Select a Service"} disabled>
                      Select a Service
                    </option>
                    <option value="consulting">Consulting</option>
                    <option value="marketing">Marketing</option>
                    <option value="seo">SEO</option>
                    <option value="content-writing">Content Writing</option>
                  </select>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <Button
                data-animate="fade-in-right"
                type="submit"
                className="w-full"
              >
                Get Free Consultancy
              </Button>
              {/* <Button
                data-animate="fade-in-right"
                type="submit"
                className="w-full"
              >
                Get Free Consultancy
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
