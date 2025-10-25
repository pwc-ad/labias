import type { ArtworkSlug } from '@/constants/artworks';

interface TourItem {
	slug: string;
	visited: boolean;
}
type Tour = TourItem[];

class TourManager {
	tour: Tour;

	constructor(tour: Tour) {
		this.tour = tour;
	}

	markVisited(slug: string) {
		const item = this.tour.find((item) => item.slug === slug);
		if (item) {
			item.visited = true;
		}
	}

	getNextArtworkSlug(currentSlug?: string): ArtworkSlug | null {
		if (this.unvisitedSlugs.length > 0) return this.unvisitedSlugs[0];

		if (!currentSlug) return this.tour[0].slug || null;

		const currentIndex = this.tour.findIndex(
			(item) => item.slug === currentSlug
		);
		if (currentIndex === -1) return null;

		const nextIndex = (currentIndex + 1) % this.tour.length;
		return this.tour[nextIndex].slug || null;
	}

	get visitedSlugs() {
		return this.tour
			.filter((item) => item.visited)
			.map((item) => item.slug);
	}

	get unvisitedSlugs() {
		return this.tour
			.filter((item) => !item.visited)
			.map((item) => item.slug);
	}

	toString() {
		return JSON.stringify(this.tour);
	}
}

const dropTourIfOutdated = (artworkSlugs: string[]) => {
	const artworkListHash = artworkSlugs.join('|');
	const storedHash = localStorage.getItem('tour-hash');
	if (storedHash !== artworkListHash) {
		localStorage.removeItem('tour');
		localStorage.setItem('tour-hash', artworkListHash);
	}
}

export const getTour = (artworkSlugs: string[]) => {
	dropTourIfOutdated(artworkSlugs);
	
	const storedTour = localStorage.getItem('tour');
	const tourManager = storedTour
		? new TourManager(JSON.parse(storedTour))
		: new TourManager(createTour(artworkSlugs));
	return tourManager;
};

export const createTour = (artworkSlugs: string[]): Tour => {
	const randomizedSlugs = [...artworkSlugs].sort(() => Math.random() - 0.5);
	return randomizedSlugs.map((slug) => ({
		slug,
		visited: false,
	}));
};

export const saveTour = (tourManager: TourManager) => {
	localStorage.setItem('tour', tourManager.toString());
};
