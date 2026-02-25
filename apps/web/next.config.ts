import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const pagesBasePath =
  isGitHubPages && repositoryName ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  reactStrictMode: true,
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
  images: {
    unoptimized: isGitHubPages,
  },
  trailingSlash: isGitHubPages,
};

export default nextConfig;
