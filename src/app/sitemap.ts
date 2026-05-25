/*
 * @Author: nh-nijam nijamhossen64@gmail.com
 * @Date: 2026-05-25 11:03:27
 * @LastEditors: nh-nijam nijamhossen64@gmail.com
 * @LastEditTime: 2026-05-25 11:05:22
 * @FilePath: \protfolio\src\app\sitemap.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual live domain URL
  const baseUrl = 'https://nijamhossen.vercel.app/';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // If you add multiple pages (like an about page, blog, etc.), add them here
  ];
}
