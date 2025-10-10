/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  experimental: {
    // Ensure the SQLite DB file is included in the serverless bundle on Vercel
    outputFileTracingIncludes: {
      // Trace from modules that access the DB so the asset is copied
      "lib/players.js": ["./players.db"],
      "app/foodballs/page.js": ["./players.db"],
      "app/foodballs/[slug]/page.js": ["./players.db"],
    },
  },
};

export default nextConfig;
