"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import to ensure it only loads on client side
const HearthMotion = dynamic(() => import("hearthmotion"), {
  ssr: false,
});

const HearthMotionProvider = ({
  children,
  config = {},
  className = "",
  ...props
}) => {
  useEffect(() => {
    const initHearthMotion = async () => {
      try {
        // Import HearthMotion dynamically
        const { default: HearthMotion } = await import("hearthmotion");

        // Initialize with custom config
        await HearthMotion.init(config);
      } catch (error) {
        console.error("Failed to initialize HearthMotion:", error);
      }
    };

    // Ensure DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initHearthMotion);
    } else {
      initHearthMotion();
    }

    return () => {
      // Cleanup if needed
      document.removeEventListener("DOMContentLoaded", initHearthMotion);
    };
  }, [config]);

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default HearthMotionProvider;
