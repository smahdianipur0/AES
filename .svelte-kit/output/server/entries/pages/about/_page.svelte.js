import { c as create_ssr_component } from "../../../chunks/index2.js";
import { t as title } from "../../../chunks/titleStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("About");
  return `${$$result.head += `<!-- HEAD_svelte-x247gu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About Page"><!-- HEAD_svelte-x247gu_END -->`, ""}


<section><span><span style="display: grid; justify-content: center ; ">Encrypt / Decryptg template :  <a class="anchor" href=" https://asecuritysite.com/">asecuritysite</a>
		<br>
		Framework : <a class="anchor" href="https://kit.svelte.dev/">Sveltekit</a>
		<br>
		Template : <a class="anchor" href="https://github.com/Ncookiez">Ncookiez</a>
		<br>
		UI toolkit : <a class="anchor" href="https://www.skeleton.dev/">Skeleton</a>
		<br>
		Rust and WebAssembly tutorial : <a class="anchor" href="https://www.youtube.com/channel/UC2S3Qt_thQx0vk6zDaE8Lqw">SvelteRust</a>
		<br>
		icon : <a class="anchor" href="https://iconscout.com/contributors/ncrte3d">Naufal Imaanullah</a></span></span></section>`;
});
export {
  Page as default
};
