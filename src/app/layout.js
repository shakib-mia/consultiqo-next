import "./globals.css";
import "sweetalert2/src/sweetalert2.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import HearthMotionInitializer from "./components/HearthMotionInitializer/HearthMotionInitializer";

export const metadata = {
  title: "Consultiqo - Get help from the expert consultants.",
  description: "Consulting Agency Full Site Kit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HearthMotionInitializer />
        <Navbar />
        {children}
        <Newsletter />
        <Footer />

        {/* <div className="fixed bottom-4 right-4">
          <Button href="/" className="!rounded-full !px-6">
            Get it Now
          </Button>
        </div> */}
      </body>
    </html>
  );
}
