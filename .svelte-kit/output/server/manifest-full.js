export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.png","icofont/fonts/icofont.eot","icofont/fonts/icofont.svg","icofont/fonts/icofont.ttf","icofont/fonts/icofont.woff","icofont/fonts/icofont.woff2","icofont/icofont.min.css","icon.png","manifest.json","maskable_icon.png","screenshot1.png","screenshot2.png","sitemap.xml","service-worker.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".json":"application/json",".xml":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.61280e82.js","app":"_app/immutable/entry/app.35e7e3b4.js","imports":["_app/immutable/entry/start.61280e82.js","_app/immutable/chunks/index.aeda84fa.js","_app/immutable/chunks/singletons.1f9c74db.js","_app/immutable/chunks/index.eda8a804.js","_app/immutable/entry/app.35e7e3b4.js","_app/immutable/chunks/index.aeda84fa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/qrcode",
				pattern: /^\/qrcode\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
