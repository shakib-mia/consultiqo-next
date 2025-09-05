import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Announcement from "./components/Announcement/Announcement";

export default function Home() {
  return (
    <>
      <Header />
      <Stats />
      <ServicesSection />
      <Features />
      <Announcement />

      <Testimonials />
      <Contact />
    </>
  );
}
