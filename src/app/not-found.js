// app/not-found.jsx
import Link from "next/link";
import Button from "./components/Button/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text column */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h1 className="text-7xl! mb-2" data-animate="fade-in">
                Oops
              </h1>
              <h2 data-animate="fade-in" data-delay="100ms">
                Page Not Found.
              </h2>

              <p
                className="text-lg text-gray-700 mt-4 mb-6"
                data-animate="fade-in"
                data-delay="200ms"
              >
                The link might be incorrect, or the page may have been moved. No
                worries — you can return to the homepage using the button below
                or contact support if you need help.
              </p>

              <div
                className="flex flex-wrap gap-3"
                data-animate="fade-in"
                data-delay="300ms"
              >
                <Button href="/">Back to Home</Button>

                <Link
                  href="/contact"
                  className="inline-block border border-primary text-primary px-4 py-2 rounded-lg font-gilroy-medium hover:bg-primary hover:text-white transition"
                >
                  Contact Support
                </Link>
              </div>

              <div
                className="mt-8 text-sm text-gray-500"
                data-animate="fade-in"
                data-delay="400ms"
              >
                <p>Try these:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Check the URL for typos</li>
                  <li>
                    Visit the{" "}
                    <Link
                      href="/services"
                      className="text-indigo-600 hover:underline"
                    >
                      Services
                    </Link>{" "}
                    page
                  </li>
                  <li>
                    Go to{" "}
                    <Link
                      href="/plans"
                      className="text-indigo-600 hover:underline"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Illustration column */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div
              className="w-full max-w-md p-6 rounded-xl shadow-lg bg-primary-light"
              aria-hidden="true"
              data-animate
            >
              {/* Simple illustrative SVG */}
              <svg
                className="w-full h-72 md:h-80"
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="600"
                  height="450"
                  rx="20"
                  fill="#F7F8FF"
                />
                <g transform="translate(60,60)">
                  <circle
                    cx="120"
                    cy="120"
                    r="80"
                    fill="#473BF0"
                    opacity="0.12"
                  />
                  <path
                    d="M40 240 L200 40 L360 240"
                    stroke="#473BF0"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <rect
                    x="10"
                    y="250"
                    width="420"
                    height="120"
                    rx="12"
                    fill="#FFF"
                    stroke="#E9E9FF"
                  />
                  <text
                    x="40"
                    y="320"
                    fontFamily="Rubik, sans-serif"
                    fontSize="24"
                    fill="#161C2D"
                  >
                    404
                  </text>
                  <text
                    x="120"
                    y="318"
                    fontFamily="Rubik, sans-serif"
                    fontSize="14"
                    fill="#6B7280"
                  >
                    Page not found
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 0.7s ease forwards;
        }

        [data-animate]:nth-child(1) {
          animation-delay: 0.08s;
        }
        [data-animate]:nth-child(2) {
          animation-delay: 0.16s;
        }
        [data-animate]:nth-child(3) {
          animation-delay: 0.24s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.bg-primary) {
          background-color: var(--color-primary);
        }
        :global(.text-dark) {
          color: var(--color-dark);
        }
        :global(.bg-primary-light) {
          background-color: var(--color-primary-light);
        }
        :global(.text-primary) {
          color: var(--color-primary);
        }
        :global(.border-primary) {
          border-color: var(--color-primary);
        }
      `}</style> */}
    </main>
  );
}
