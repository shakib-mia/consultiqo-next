import Image from "next/image";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import HearthMotionProvider from "./components/AosWrapper/AosWrapper";

export default function Home() {
  return (
    <HearthMotionProvider>
      {/* <div id="hm-wrapper">
        <div id="hm-content"> */}
      <Header />
      <Stats />
      <Services />
      <Features />
      {/* <!-- Announcement / Notification Bar --> */}
      <div className="bg-primary py-8 text-white" data-animate="fade-in">
        <div className="container text-center">
          {/* <!-- Badge --> */}
          <span className="bg-white rounded-full px-2 lg:px-4 py-1 text-primary font-bold mr-2">
            NEW
          </span>
          {/* <!-- Announcement Text --> */}
          <span> We’ve added a new exciting feature in v3.0. </span>
          {/* <!-- Call-to-Action Link --> */}
          <a
            href="#"
            className="underline hover:no-underline underline-offset-3"
          >
            Get it now for $49{" "}
          </a>
          .
        </div>
      </div>

      <Testimonials />
      <Contact />
      {/* </div>
      </div> */}
    </HearthMotionProvider>
  );
}
