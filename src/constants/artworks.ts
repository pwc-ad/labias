
export type ArtworkType = 'video' | 'image' | 'interactive' | 'audio';

export interface VideoMetadata {
	type: 'video';
  videoUrl: string;
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
  year: number;
	metadata: VideoMetadata | ImageMetadata | InteractiveMetadata | AudioMetadata;
}

export type Artworks = Artwork[];

export const artworks: Artworks = [
  {
    slug: "titulo-obra",
		title: "Título Obra",
		author: "Nombre Artista",
		year: 2025,
		metadata: {
			type: "video",
			videoUrl: "https://stream.mux.com/00o5gSGUHaGGt1kB6babUC0101yFQWmR3UtbLElVsHSLzo.m3u8",
			muxPlaybackId: "00o5gSGUHaGGt1kB6babUC0101yFQWmR3UtbLElVsHSLzo"
		}
	},
	{
    slug: "nocturne-echoes",
		title: "Nocturne Echoes",
		author: "María Duarte",
		year: 2024,
		metadata: {
			type: "video",
			videoUrl: "https://stream.mux.com/QHd3wlW5MSvV0002pdOUv02iYNge01mejga7qHa9mjqisDc.m3u8",
		}
	},
	{
    slug: "analog-dreams",
		title: "Analog Dreams",
		author: "Luca Ferri",
		year: 2023,
		metadata: {
			type: "interactive",
			url: "https://radicalsoftware.xyz/labs/en/vertex-sphere/",
		}
	},
	{
    slug: "static-reverie",
		title: "Static Reverie",
		author: "Yara Kim",
		year: 2022,
		metadata: {
			type: "video",
			videoUrl: "/video/video.mp4",
		}
	},
	{
    slug: "tape-memory",
		title: "Tape Memory",
		author: "Omar R.",
		year: 2021,
		metadata: {
			type: "video",
			videoUrl: "/video/video.mp4",
		}
	},
	{
		slug: "chromatic-haze",
		title: "Chromatic Haze",
		author: "Anika Bose",
		year: 2025,
		metadata: {
			type: "video",
			videoUrl: "/video/video.mp4",
		}
	},
	{
		slug: "reel-static",
		title: "Reel Static",
		author: "S. Nakamoto",
		year: 2020,
		metadata: {
			type: "video",
			videoUrl: "/video/video.mp4",
		}
	}
];

export type ArtworkSlug = typeof artworks[number]['slug'];