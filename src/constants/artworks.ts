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
	// {
	// 	slug: 'titulo-obra',
	// 	title: 'Título Obra',
	// 	author: 'Nombre Artista',
	// 	year: 2025,
	// 	metadata: {
	// 		type: 'video',
	// 		videoUrl:
	// 			'https://stream.mux.com/00o5gSGUHaGGt1kB6babUC0101yFQWmR3UtbLElVsHSLzo.m3u8',
	// 		muxPlaybackId: '00o5gSGUHaGGt1kB6babUC0101yFQWmR3UtbLElVsHSLzo',
	// 		posterUrl: '/video/poster.jpg',
	// 	},
	// },
	{
		slug: 'sedimental',
		title: 'Sedimental',
		author: 'Gonzalo Tello',
		year: 2024,
		metadata: {
			type: 'video',
			videoUrl:
				'https://stream.mux.com/QHd3wlW5MSvV0002pdOUv02iYNge01mejga7qHa9mjqisDc.m3u8',
			muxPlaybackId: 'QHd3wlW5MSvV0002pdOUv02iYNge01mejga7qHa9mjqisDc',
			posterUrl: '/sedimental.jpg',
		},
	},
	{
		slug: 'agua-limpia-aire-limpio',
		title: 'Agua limpia, aire limpio',
		author: 'TAMAAINA',
		year: 2025,
		metadata: {
			type: 'interactive',
			url: 'https://editor.p5js.org/tamourac/full/LNPWtPFZ3',
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
		slug: 'perfect-candidate',
		title: 'Perfect Candidate',
		author: 'Florencia Marina Romero',
		year: 2025,
		metadata: {
			type: 'video',
			videoUrl: 'https://stream.mux.com/gZZDbSTs00One0201DYNhc4Rv4q16rCeF6mm2cRV1snzGk.m3u8',
			muxPlaybackId: 'gZZDbSTs00One0201DYNhc4Rv4q16rCeF6mm2cRV1snzGk',
			posterUrl: '/perfect-candidate.jpg',
		},
	},
	{
		slug: 'it-was-almost-night-by-the-beach',
		title: 'It was almost night by the beach',
		author: 'Federico Grinbank',
		year: 2025,
		metadata: {
			type: 'image',
			images: [
				// {
				// 	url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626715/1_my7grb.jpg',
				// 	alt: '',
				// },
				{ // 1
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626719/2_yixnpy.jpg',
					alt: '',
				},
				{ // 2
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626715/19_a074eh.jpg',
					alt: '',
				},
				{ // 3
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626713/3_djoulf.jpg',
					alt: '',
				},
				{ // 4
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/11_we1hph.jpg',
					alt: '',
				},
				{ // 5
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/4_y9rw02.jpg',
					alt: '',
				},
				{ // 6
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/5_pjlc5y.jpg',
					alt: '',
				},
				{ // 7
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626711/6_l2sza2.jpg',
					alt: '',
				},
				// {
				// 	url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/7_dfq5k8.jpg',
				// 	alt: '',
				// },
				{ // 8
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/8_juczsk.jpg',
					alt: '',
				},
				{ // 9
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626708/9_bbwjnp.jpg',
					alt: '',
				},
				{ // 10
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626709/10_pxajbk.jpg',
					alt: '',
				},
				{ // 11
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626712/13_sgu8ah.jpg',
					alt: '',
				},
				{ // 12
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626712/21_sq77el.jpg',
					alt: '',
				},
				{ // 13
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/12_oxgqjp.jpg',
					alt: '',
				},
				{ // 14
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626715/14_tbybsd.jpg',
					alt: '',
				},
				{ // 15
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/15_armelz.jpg',
					alt: '',
				},
				{ // 16
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626713/16_y7ks0s.jpg',
					alt: '',
				},
				{ // 17
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626713/17_fukig9.jpg',
					alt: '',
				},
				{ // 18
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626710/18_wxxcqf.jpg',
					alt: '',
				},
				{ // 19
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761626712/20_drualt.jpg',
					alt: '',
				},
			],
		},
	},
	{
		slug: 'zdg',
		title: 'ZDG',
		author: 'C53',
		year: '2024-2025',
		metadata: {
			type: 'interactive',
			url: 'https://c53.ar/zdg',
		},
	},
	{
		slug: 'ajustadxs',
		title: 'Ajustadxs',
		author: 'nivvvo',
		year: 2025,
		metadata: {
			type: 'image',
			images: [
				{
					url: 'https://res.cloudinary.com/dvnjoza1p/image/upload/v1761624607/Ajustadxs_zjq5hk.jpg',
					alt: '',
				},
			],
		},
	},
];

export type ArtworkSlug = (typeof artworks)[number]['slug'];
