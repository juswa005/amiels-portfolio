import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/amiels-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
