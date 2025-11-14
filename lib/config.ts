// Base path configuration for GitHub Pages deployment
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/asl-web' : '';

// Helper function to get full path for assets
export const getAssetPath = (path: string): string => {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
};
