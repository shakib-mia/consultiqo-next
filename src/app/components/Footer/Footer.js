import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="container grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-y border-light">
        {/* <!-- Company section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Company</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </aside>

        {/* <!-- Product section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Product</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Help desk</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </aside>

        {/* <!-- Services section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Services</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Content Writing</a>
            </li>
            <li>
              <a href="#">SEO for Business</a>
            </li>
            <li>
              <a href="#">UI Design</a>
            </li>
          </ul>
        </aside>

        {/* <!-- Legal section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Legal</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </aside>

        {/* <!-- Contact & Social Media section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Contact Us</h6>
          <ul className="mt-2 space-y-2">
            {/* <!-- Email link --> */}
            <li>
              <a href="mailto:templatehearth@gmail.com">
                templatehearth@gmail.com
              </a>
            </li>

            {/* <!-- Social media icons --> */}
            <li className="flex gap-2 items-center text-white">
              {/* <!-- Facebook --> */}
              <a
                name="Facebook"
                href="https://www.facebook.com/templatehearth"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-12 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition"
              >
                {/* <i className="fab fa-facebook-f"></i> */}
                <FaFacebookF />
              </a>

              {/* <!-- Twitter / X --> */}
              <a
                name="Twitter / X"
                href="https://x.com/TemplateHearth/"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-12 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition fill-white"
              >
                <FaXTwitter />
              </a>

              {/* <!-- LinkedIn --> */}
              <a
                name="LinkedIn"
                href="https://www.linkedin.com/in/templatehearth/"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-12 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition"
              >
                {/* <i className="fab fa-linkedin-in"></i> */}
                <FaLinkedinIn />
              </a>

              {/* <!-- Gumroad --> */}
              <a
                name="Gumroad"
                href="https://templatehearth.gumroad.com/"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-12 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition"
              >
                <SiGumroad />
              </a>
            </li>
          </ul>
        </aside>
      </footer>

      <div className="container text-center py-4">
        © {new Date().getFullYear()} Consultiqo, Designed by{" "}
        <a
          href="https://www.figma.com/@sejal_ui_ux"
          target="_blank"
          rel="no-referrer"
        >
          Seju_ui_ux
        </a>
        , Developed By{" "}
        <a
          href="https://templatehearth.vercel.app/"
          target="_blank"
          rel="no-referrer"
        >
          Template Hearth
        </a>
      </div>
    </>
  );
};

export default Footer;
