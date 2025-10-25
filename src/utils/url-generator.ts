import type { ArtworkSlug } from '@/constants/artworks';

export const generateArtworkUrl = (slug: ArtworkSlug): string => {
	return `/${slug}`;
};
