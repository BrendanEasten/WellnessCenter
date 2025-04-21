/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Replace with your repository name
    basePath: process.env.NODE_ENV === "production" ? "/WellnessCenter" : "",
    assetPrefix:
        process.env.NODE_ENV === "production" ? "/WellnessCenter/" : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
