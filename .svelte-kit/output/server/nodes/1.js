

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cb20692b.js","_app/immutable/chunks/index.aeda84fa.js","_app/immutable/chunks/singletons.1f9c74db.js","_app/immutable/chunks/index.eda8a804.js"];
export const stylesheets = [];
export const fonts = [];
