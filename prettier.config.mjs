/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {{astroAllowShorthand: boolean, astroSkipFrontmatter: boolean}} PrettierConfigAstro */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} PrettierTailwindConfig */
/** @typedef {PrettierConfig & PrettierConfigAstro & PrettierTailwindConfig} Config */

/**
 * @see https://prettier.io/docs/configuration
 * @type {Config}
 */
const config = {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	useTabs: true,
	trailingComma: 'es5',
	tabWidth: 4,
	singleQuote: true,
};

export default config;
