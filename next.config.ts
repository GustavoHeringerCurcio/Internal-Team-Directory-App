import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/**", // libera qualquer caminho do dummyimage
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**", // libera só os perfis
        
      },
    ],
  },

};

module.exports = nextConfig;
export default nextConfig;
