/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/residences", permanent: true },
      { source: "/products/:path*", destination: "/residences", permanent: true },
      { source: "/accessories", destination: "/amenities", permanent: true },
      { source: "/accessories/:path*", destination: "/amenities", permanent: true },
      { source: "/careers", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
