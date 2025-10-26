export type ArtworkType = 'video' | 'image' | 'interactive' | 'audio';

export interface VideoMetadata {
	type: 'video';
	videoUrl: string;
	posterUrl: string;
	muxPlaybackId?: string;
}

export interface ImageMetadata {
	type: 'image';
	images: {
		url: string;
		alt?: string;
	}[];
}
export interface InteractiveMetadata {
	type: 'interactive';
	url: string;
}
export interface AudioMetadata {
	type: 'audio';
	audioUrl: string;
}
export interface Artwork {
	slug: string;
	title: string;
	author: string;
	year: number | string;
	metadata:
		| VideoMetadata
		| ImageMetadata
		| InteractiveMetadata
		| AudioMetadata;
}

export type Artworks = Artwork[];

export const artworks: Artworks = [
	{
		slug: 'titulo-obra',
		title: 'Título Obra',
		author: 'Nombre Artista',
		year: 2025,
		metadata: {
			type: 'video',
			videoUrl:
				'https://stream.mux.com/00o5gSGUHaGGt1kB6babUC0101yFQWmR3UtbLElVsHSLzo.m3u8',
			muxPlaybackId: '00o5gSGUHaGGt1kB6babUC0101yFQWmR3UtbLElVsHSLzo',
			posterUrl: '/video/poster.jpg',
		},
	},
	{
		slug: 'nocturne-echoes',
		title: 'Nocturne Echoes',
		author: 'María Duarte',
		year: 2024,
		metadata: {
			type: 'video',
			videoUrl:
				'https://stream.mux.com/QHd3wlW5MSvV0002pdOUv02iYNge01mejga7qHa9mjqisDc.m3u8',
			posterUrl: '/video/poster.jpg',
		},
	},
	{
		slug: 'analog-dreams',
		title: 'Analog Dreams',
		author: 'Luca Ferri',
		year: 2023,
		metadata: {
			type: 'interactive',
			url: 'https://radicalsoftware.xyz/labs/en/vertex-sphere/',
		},
	},
	{
		slug: 'circulos-blandos-y-semillas',
		title: 'Círculos Blandos y Semillas',
		author: 'Federico Abrile',
		year: 2024,
		metadata: {
			type: 'interactive',
			url: 'https://fabrile.github.io/CirculosBlandosSimple/',
		},
	},
	{
		slug: 'tape-memory',
		title: 'Tape Memory',
		author: 'Omar R.',
		year: 2021,
		metadata: {
			type: 'video',
			videoUrl: '/video/video.mp4',
			posterUrl: '/video/poster.jpg',
		},
	},
	{
		slug: 'chromatic-haze',
		title: 'Chromatic Haze',
		author: 'Anika Bose',
		year: 2025,
		metadata: {
			type: 'video',
			videoUrl: '/video/video.mp4',
			posterUrl: '/video/poster.jpg',
		},
	},
	{
		slug: 'zdg',
		title: 'ZDG',
		author: 'C53',
		year: "2024-2025",
		metadata: {
			type: 'interactive',
			url: 'https://c53.ar/zdg',
		},
	},
	{
		slug: "glitch-odyssey",
		title: "Glitch Odyssey",
		author: "Elena Petrova",
		year: 2023,
		metadata: {
			type: "image",
			images: [
				{ url: "/historia.jpg", alt: "Glitch Odyssey Image 1" },
				{ url: "/poster.jpg", alt: "Glitch Odyssey Image 2" },
				{ url: "/poster-alt.jpg", alt: "Glitch Odyssey Image 3" },
			],
		}
	},
];

export type ArtworkSlug = (typeof artworks)[number]['slug'];
