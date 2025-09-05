"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useHearthMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    async function setup() {
      // Load animate.css if not already
      if (!document.querySelector("#hm-animate-css")) {
        const link = document.createElement("link");
        link.id = "hm-animate-css";
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
        document.head.appendChild(link);
      }

      // Lenis already bundled in CDN hearthmotion-core.js
      if (window.HearthMotion) {
        window.HearthMotion.init();
      }
    }

    setup();
  }, [pathname]); // re-init on route change
}
