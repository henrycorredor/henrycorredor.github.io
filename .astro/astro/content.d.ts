declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"works": {
"conceptual-performance/cement-park-live-house-36th/index.md": {
	id: "conceptual-performance/cement-park-live-house-36th/index.md";
  slug: "conceptual-performance/cement-park-live-house-36th";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"conceptual-performance/digital-dialectics/index.md": {
	id: "conceptual-performance/digital-dialectics/index.md";
  slug: "conceptual-performance/digital-dialectics";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"conceptual-performance/evolvement-1/index.md": {
	id: "conceptual-performance/evolvement-1/index.md";
  slug: "conceptual-performance/evolvement-1";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"conceptual-performance/evolvement-2/index.md": {
	id: "conceptual-performance/evolvement-2/index.md";
  slug: "conceptual-performance/evolvement-2";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"conceptual-performance/limbo/index.md": {
	id: "conceptual-performance/limbo/index.md";
  slug: "conceptual-performance/limbo";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"conceptual-performance/poidance/index.md": {
	id: "conceptual-performance/poidance/index.md";
  slug: "conceptual-performance/poidance";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"scultpture-and-interactive-installation/body-sequencer/index.md": {
	id: "scultpture-and-interactive-installation/body-sequencer/index.md";
  slug: "scultpture-and-interactive-installation/body-sequencer";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"scultpture-and-interactive-installation/fly-2019/index.md": {
	id: "scultpture-and-interactive-installation/fly-2019/index.md";
  slug: "scultpture-and-interactive-installation/fly-2019";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"scultpture-and-interactive-installation/food-variation/index.md": {
	id: "scultpture-and-interactive-installation/food-variation/index.md";
  slug: "scultpture-and-interactive-installation/food-variation";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"scultpture-and-interactive-installation/present-revisit/index.md": {
	id: "scultpture-and-interactive-installation/present-revisit/index.md";
  slug: "scultpture-and-interactive-installation/present-revisit";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"scultpture-and-interactive-installation/semi-conductivity/index.md": {
	id: "scultpture-and-interactive-installation/semi-conductivity/index.md";
  slug: "scultpture-and-interactive-installation/semi-conductivity";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
"scultpture-and-interactive-installation/wind-shield/index.md": {
	id: "scultpture-and-interactive-installation/wind-shield/index.md";
  slug: "scultpture-and-interactive-installation/wind-shield";
  body: string;
  collection: "works";
  data: InferEntrySchema<"works">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
