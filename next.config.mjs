/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "/**",
      },
      // localhost
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
