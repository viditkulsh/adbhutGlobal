// Next.js configuration file
// This file is used to customize the Next.js build process
module.exports = {
  distDir: 'build',
  output: 'export', // Ensure this is set for static export
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};
