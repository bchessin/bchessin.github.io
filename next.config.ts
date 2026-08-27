import type { NextConfig } from 'next';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repositoryName?.endsWith('.github.io') ?? false;
const githubBasePath = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserSite ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: githubBasePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
