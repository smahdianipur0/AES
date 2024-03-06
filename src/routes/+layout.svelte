<script lang="ts">

	// Imports:
	import Nav from '$lib/Nav.svelte';
	import "../app.pcss";

</script>

<!-- ################################################################################################ -->

<!-- Navbar -->
<Nav></Nav>

<!-- App Content -->
<main><slot></slot></main>


	

<!-- #################################################################################################### -->

<style>

	main {
		padding: 1em;
	}

</style>