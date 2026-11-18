import type { Metadata } from 'next';
import { owner } from './owner';

export const siteUrl = 'https://vrach-cosm.ru';
export const siteName = `Врачебная косметология – ${owner.shortName}`;
export const homeTitle = `${siteName} | ${owner.city}`;

export function pageMetadata(path: `/${string}`, title: string, description: string): Metadata {
  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      siteName,
      url: path,
      title: path === '/' ? title : `${title} | ${owner.shortName}`,
      description,
      images: [{ url: '/photos/hero.png', width: 1109, height: 1109, alt: 'Кабинет косметолога' }],
    },
  };
}
