import type { CamelCasePrefixed, StringEnum } from '@/utils/types';

export type CursorLayers =
	| 'content'
	// | 'follower'
	| 'pointer';
export const CURSOR_LAYERS = {
	content: 'cursor-content',
	// follower: 'cursor-follower',
	pointer: 'cursor-pointer',
} as const satisfies {
	[Id in CursorLayers]: `cursor-${Id}`;
};

export type CursorMode = 'custom' | 'default' | 'interactive';
export const CURSOR_MODES = {
	custom: 'custom',
	default: 'default',
	interactive: 'interactive',
} as const satisfies StringEnum<CursorMode>;

export type CursorDatasetKey = CamelCasePrefixed<
	Exclude<CursorMode, 'custom'>,
	'cursor'
>;
export const CURSOR_DATA_ATTRIBUTES = {
	cursorDefault: 'cursorDefault',
	cursorInteractive: 'cursorInteractive',
} as const satisfies StringEnum<CursorDatasetKey>;

export const CURSOR_DATA_ATTRIBUTES_MAP = {
	cursorDefault: 'default',
	cursorInteractive: 'interactive',
} as const satisfies {
	[Key in CursorDatasetKey]: Key extends `cursor${infer Mode}`
		? Lowercase<Mode> extends CursorMode
			? Lowercase<Mode>
			: never
		: never;
};

export interface CursorDataset {
	'data-cursor-default'?: true;
	'data-cursor-interactive'?: string;
}

export const CURSOR_INTERACTIVE_TARGET_QUERY_SELECTOR = (
	[
		'a',
		'audio',
		'button',
		'details',
		'dialog',
		'embed',
		'iframe',
		'input',
		'select',
		'output',
		'video',
	] as const satisfies Array<keyof HTMLElementTagNameMap>
).join(', ');
