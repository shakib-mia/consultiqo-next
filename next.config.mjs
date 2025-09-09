/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "i.ibb.co",
    //     port: "",
    //     pathname: "/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "randomuser.me",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
    domains: ["i.ibb.co", "randomuser.me"],
  },
};

export default nextConfig;
