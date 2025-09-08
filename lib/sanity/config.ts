// lib/sanity/config.ts
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: '2024-05-17', // Use the current date in YYYY-MM-DD format
  useCdn: true, // Recommended for server-side rendering
};