<script lang="ts">

	
	import { onMount } from 'svelte';
	onMount(() => {

	});
	
	import { title } from '$lib/titleStore';
 	 title.set('About');
</script>

<br>
<br>
<br>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About Page" />
</svelte:head>

<!-- Page Content -->
<section>
	<span>
		
		
		<span style="display: grid; justify-content: center ; " >
		Encrypt / Decryptg template :  <a class="anchor" href=" https://asecuritysite.com/">asecuritysite</a>
		<br>
		Framework : <a class="anchor" href="https://kit.svelte.dev/">Sveltekit</a>
		<br>
		Template : <a class="anchor" href="https://github.com/Ncookiez">Ncookiez</a>
		<br>
		UI toolkit : <a class="anchor" href="https://www.skeleton.dev/">Skeleton</a>
		<br>
  
		Rust and WebAssembly tutorial : <a class="anchor" href="https://www.youtube.com/channel/UC2S3Qt_thQx0vk6zDaE8Lqw">SvelteRust</a>
		<br>
		icon : <a class="anchor" href="https://iconscout.com/contributors/ncrte3d">Naufal Imaanullah</a>
		<br>
		realistic password strength estimation : <a class="anchor" href="https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation">zxcvbn</a>
		<br>
				
		</span>
		
	</span>
	
</section>