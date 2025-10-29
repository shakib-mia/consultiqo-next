// "use client";

import "./globals.css";
import "sweetalert2/src/sweetalert2.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Layout from "./components/Layout/Layout";
import HearthMotionInitializer from "./components/HearthMotionInitializer/HearthMotionInitializer";
import AosLenisProvider from "./components/AosWrapper/AosWrapper";
import Script from "next/script";

export const metadata = {
  title: "Consultiqo - Get help from the expert consultants.",
  description: "Consulting Agency Full Site Kit",
};

export default function RootLayout({ children }) {
  // useHearthMotion();
  return (
    <html lang="en">
      <body>
        <HearthMotionInitializer />
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
