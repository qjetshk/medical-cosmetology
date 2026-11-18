import type { MetadataRoute } from 'next';
import { navLinks } from '@/data/nav';
import { siteUrl } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...navLinks.map(({ href }) => href), '/license'];
  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
