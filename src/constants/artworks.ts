export type ArtworkType = 'video' | 'image' | 'interactive' | 'audio';

export interface VideoMetadata {
	type: 'video';
	videoUrl: string;
	posterUrl: string;
	muxPlaybackId?: string;
}

export interface GalleryMetadata {
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
		| GalleryMetadata
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
			type: 'image',
			images: [
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626715/1_my7grb.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626719/2_yixnpy.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626713/3_djoulf.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/4_y9rw02.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/5_pjlc5y.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626711/6_l2sza2.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/7_dfq5k8.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/8_juczsk.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626708/9_bbwjnp.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/10_pxajbk.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/11_we1hph.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/12_oxgqjp.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626712/13_sgu8ah.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626715/14_tbybsd.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/15_armelz.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626713/16_y7ks0s.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626713/17_fukig9.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/18_wxxcqf.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626715/19_a074eh.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626712/20_drualt.jpg', alt: '' },
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626712/21_sq77el.jpg', alt: '' },
			]
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
			type: 'image',
			images: [
				{ url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761624607/Ajustadxs_zjq5hk.jpg', alt: '' },
			]
		}
	},
];

export type ArtworkSlug = (typeof artworks)[number]['slug'];
