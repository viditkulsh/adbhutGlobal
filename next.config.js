// Next.js configuration file
// This file is used to customize the Next.js build process
module.exports = {
  distDir: 'build',
  output: 'export', // Ensure this is set for static export
  images: {
    unoptimized: true, // Disable image optimization for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression
  compress: true,
  
  // Note: headers() and redirects() don't work with static export
  // These would need to be handled by your hosting provider (e.g., Vercel, Netlify)
  
  // Enable experimental features for better performance
  experimental: {
    // Removed optimizeCss as it's causing issues with static export
    webpackBuildWorker: true,
  },
  
  // Webpack configuration for better optimization
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }
    
    return config
  },
  
  // Enable trailing slash for consistency
  trailingSlash: false,
};
