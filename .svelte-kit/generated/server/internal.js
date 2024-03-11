
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: true,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\n\t\t<!-- Meta Attributes -->\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t<meta name=\"theme-color\" content=\"#0a0a0a\">\n\t\t<meta name=\"color-scheme\" content=\"dark light\">\n\n\t\t<!-- OG Meta Attributes -->\n\t\t<!-- <meta property=\"og:type\" content=\"website\"> -->\n\t\t<!-- <meta property=\"og:url\" content=\"https://example.com/\"> -->\n\t\t<!-- <meta property=\"og:title\" content=\"Example Title\"> -->\n\t\t<!-- <meta property=\"og:description\" content=\"Example description.\"> -->\n\t\t<!-- <meta property=\"og:image\" content=\"https://example.com/image.png\"> -->\n\n\t\t<!-- Twitter Attributes -->\n\t\t<!-- <meta property=\"twitter:card\" content=\"summary_large_image\"> -->\n\t\t<!-- <meta property=\"twitter:url\" content=\"https://example.com/\"> -->\n\t\t<!-- <meta property=\"twitter:title\" content=\"Example Title\"> -->\n\t\t<!-- <meta property=\"twitter:description\" content=\"Example description.\"> -->\n\t\t<!-- <meta property=\"twitter:image\" content=\"https://example.com/image.png\"> -->\n\n\t\t<!-- Links -->\n\t\t<link rel=\"shortcut icon\" href=\"" + assets + "/favicon.png\">\n\t\t<link rel=\"apple-touch-icon\" href=\"" + assets + "/favicon.png\">\n\t\t<link rel=\"manifest\" href=\"" + assets + "/manifest.json\">\n\t\t<link rel=\"stylesheet\" href=\"" + assets + "/icofont/icofont.min.css\">\n\t\t<!-- <link rel=\"canonical\" href=\"https://example.com/\"> -->\n\n\t\t<!-- SvelteKit Header -->\n\t\t" + head + "\n\n\t</head>\n\n\t\n\n\t\t<body>\n\n\t\t\t<!-- SvelteKit Content -->\n\t\t\t<div>" + body + "</div>\n\n\t\t</body>\n\n\t\n</html>\n\t\t\n<body data-theme=\"my-custom-theme\"></body>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1xsqa2f"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
