export type CamelCasePrefixed<
	Words extends string | number,
	Prefix extends string,
> = Words extends infer Word ? `${Prefix}${Capitalize<Word>}` : never;

export type StringEnum<Keys extends string> = {
	[Key in Keys]: Key;
};
