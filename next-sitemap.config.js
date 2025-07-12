/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://adbhutglobal.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500', '/_error', '/_document', '/_app'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
    await config.transform(config, '/packages'),
    await config.transform(config, '/contact'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/private/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://adbhutglobal.com/sitemap.xml',
    ],
  },
  // Custom transformation for better SEO
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'weekly'
    
    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path === '/services' || path === '/packages') {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path === '/about') {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path === '/contact') {
      priority = 0.7
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
