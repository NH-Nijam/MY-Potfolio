import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Replace with your actual live domain URL
  const baseUrl = 'https://nijamhossen.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
