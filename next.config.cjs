// File moved to next.config.cjs for ES module compatibility.

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom Next.js config here
  pwa: {
    maximumFileSizeToCacheInBytes: 6000000, // 6MB for large JS files
    // ...other PWA options...
  },
};

module.exports = nextConfig;
