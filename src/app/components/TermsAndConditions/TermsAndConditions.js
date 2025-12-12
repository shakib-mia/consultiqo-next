"use client";

import React, { useEffect, useState } from "react";

const TermsAndConditions = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.clientHeight);
    }
  }, []);
  return (
    <div
      className="border-b border-light"
      style={{
        paddingBlock: navbarHeight + "px",
      }}
    >
      <div className="container">
        <header className="pt-24">
          <h1 className="text-center">Terms & Conditions</h1>
          <p className="text-center mt-4 lg:w-7/12 mx-auto">
            By accessing and placing an order with UXTheme, you confirm that you
            are in agreement with and bound by the terms and conditions{" "}
          </p>
        </header>

        <section className="py-5! lg:py-10!">
          <p>
            {" "}
            By accessing and placing an order with UXTheme, you confirm that you
            are in agreement with and bound by the terms and conditions
            contained in the Terms Of Use outlined below. These terms apply to
            the entire website and any email or other type of communication
            between you and UXTheme. Under no circumstances shall UXTheme team
            be liable for any direct, indirect, special, incidental or
            consequential damages, including, but not limited to, loss of data
            or profit, arising out of the use, or the inability to use, the
            materials on this site, even if UXTheme team or an authorized
            representative has been advised of the possibility of such damages.
            If your use of materials from this site results in the need for
            servicing, repair or correction of equipment or data, you assume any
            costs thereof. UXTheme will not be responsible for any outcome that
            may occur during the course of usage of our resources.
          </p>
        </section>

        <section className="space-y-2 lg:space-y-5 py-5! lg:py-10!">
          <h6>License</h6>
          <p>
            By purchasing or downloading resource (“item” or “file”) you are
            being granted a license to use these files for specific uses under
            certain conditions. Ownership remains with UXTheme, and you are
            required to abide by the following licensing terms.
          </p>
        </section>

        <section className="space-y-2 lg:space-y-5 py-5! lg:py-10!">
          <h6>Security</h6>
          <ul className="space-y-1 lg:space-y-2 list-disc pl-4">
            <li>
              You have rights for royalty free use of our resources for any or
              all of your personal.
            </li>
            <li>
              You are not required to attribute or link to UXTheme in any of
              projects.
            </li>
            <li>
              We reserve the rights to change prices and revise the resources
              usage policy in any moment.
            </li>
          </ul>
        </section>

        <section className="space-y-2 lg:space-y-5 py-5! lg:py-10!">
          <h6>Embedded content from other websites</h6>
          <div className="space-y-2">
            <p>
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your interaction with
              that embedded content, including tracking your interaction with
              the embedded content if you have an account and are logged in to
              that website.
            </p>
          </div>
        </section>

        <section className="space-y-2 lg:space-y-5 py-5! lg:py-10!">
          <h6>Changes about terms</h6>
          <p>
            If we change our terms of use we will post those changes on this
            page. Registered users will be sent an email that outlines changes
            made to the terms of use.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
