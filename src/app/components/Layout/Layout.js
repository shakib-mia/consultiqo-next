"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Layout = ({ id, children }) => {
  const pathname = usePathname();

  useEffect(() => {
    // 1️⃣ Check if script already exists
    const existingScript = document.getElementById("hearthmotion-script");
    if (existingScript) {
      existingScript.remove(); // Remove old script
    }

    // 2️⃣ Create new script
    const script = document.createElement("script");
    script.id = "hearthmotion-script"; // give an ID so we can remove later
    script.src =
      "https://cdn.jsdelivr.net/gh/shakib-mia/hearthmotion-npm@main/src/hearthmotion.js";
    script.async = true; // recommended for scripts
    document.body.appendChild(script);

    // Optional: cleanup if component unmounts
    return () => {
      const s = document.getElementById("hearthmotion-script");
      if (s) s.remove();
    };
  }, [pathname]);

  return <div id={id}>{children}</div>;
};

export default Layout;
