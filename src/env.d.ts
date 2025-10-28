// See https://docs.astro.build/en/guides/typescript/#add-non-standard-attributes

import type {
	CursorDataset,
	CursorInteractiveDataset,
	CursorMode,
} from './constants/cursor';

declare namespace astroHTML.JSX {
	interface HTMLAttributes extends CursorDataset {}
}
