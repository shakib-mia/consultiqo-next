"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function AnimateOnScroll() {
  useEffect(() => {
    // Utility: convert hyphen-case to camelCase
    function hyphenToCamelCase(text) {
      return text.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    }

    // Dynamically load Animate.css
    function loadAnimateCSS() {
      return new Promise((resolve, reject) => {
        if (document.querySelector('link[href*="animate.min.css"]')) {
          // Already loaded
          resolve();
          return;
        }
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
        link.onload = () => resolve();
        link.onerror = () => reject(new Error("Failed to load Animate.css"));
        document.head.appendChild(link);
      });
    }

    // Main scroll animation logic
    function initScrollAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            const animation = el.dataset.animate;

            if (entry.isIntersecting && !el.classList.contains("animated")) {
              if (!animation) {
                console.warn("Missing data-animate value on:", el);
                return;
              }

              const delay = parseTiming(el.dataset.delay, "0");
              const duration = parseTiming(el.dataset.duration, "800");

              el.style.opacity = "1";
              el.style.animationDelay = delay;
              el.style.animationDuration = duration;
              el.classList.add(
                "animate__animated",
                `animate__${hyphenToCamelCase(animation)}`
              );

              el.classList.add("animated");

              el.addEventListener(
                "animationend",
                () => {
                  el.classList.remove(
                    "animate__animated",
                    `animate__${hyphenToCamelCase(animation)}`
                  );
                },
                { once: true }
              );
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      function parseTiming(value, defaultValue) {
        if (!value) return `${defaultValue}ms`;
        return isNaN(value)
          ? value.endsWith("ms") || value.endsWith("s")
            ? value
            : `${value}ms`
          : `${value}ms`;
      }

      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((el) => (el.style.opacity = "0"));

      if (elements.length === 0) {
        console.warn("No elements with [data-animate] found");
        return;
      }

      elements.forEach((el) => {
        observer.observe(el);
      });
    }

    // Initialize Lenis smooth scroll
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Run Animate.css loader and init scroll animations
    loadAnimateCSS()
      .then(() => {
        console.log("Animate.css loaded successfully.");
        initScrollAnimations();
      })
      .catch((error) => {
        console.error(error);
      });

    // Cleanup function on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
