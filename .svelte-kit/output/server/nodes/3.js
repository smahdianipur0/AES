

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d8ffb815.js","_app/immutable/chunks/index.aeda84fa.js","_app/immutable/chunks/titleStore.a39d1fe0.js","_app/immutable/chunks/index.eda8a804.js"];
export const stylesheets = [];
export const fonts = [];
