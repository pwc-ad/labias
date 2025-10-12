

export interface Artwork {
  slug: string;
  title: string;
  author: string;
  year: number;
}

export type Artworks = Artwork[];

export const artworks: Artworks = [
  {
    slug: "titulo-obra",
		title: "Título Obra",
		author: "Nombre Artista",
		year: 2025
	},
	{
    slug: "nocturne-echoes",
		title: "Nocturne Echoes",
		author: "María Duarte",
		year: 2024
	},
	{
    slug: "analog-dreams",
		title: "Analog Dreams",
		author: "Luca Ferri",
		year: 2023
	},
	{
    slug: "static-reverie",
		title: "Static Reverie",
		author: "Yara Kim",
		year: 2022
	},
	{
    slug: "tape-memory",
		title: "Tape Memory",
		author: "Omar R.",
		year: 2021
	},
	{
		slug: "chromatic-haze",
		title: "Chromatic Haze",
		author: "Anika Bose",
		year: 2025
	},
	{
		slug: "reel-static",
		title: "Reel Static",
		author: "S. Nakamoto",
		year: 2020
	}
];

export type ArtworkSlug = typeof artworks[number]['slug'];