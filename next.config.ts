import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  // The guide is served at `/guide/` so the Diorama engine's relative file paths
  // (`walkthroughs/<id>.js`) resolve inside `public/guide/`.
  trailingSlash: true,
  redirects() {
    return [{ source: "/", destination: "/guide/", permanent: false }];
  },
};

export default nextConfig;
