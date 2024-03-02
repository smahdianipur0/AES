<script lang="ts">


import { autoModeWatcher } from '@skeletonlabs/skeleton';

import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
import { initializeStores } from '@skeletonlabs/skeleton';

initializeStores();
const drawerStore = getDrawerStore();


	// Initializations:
	const links = [
		{ route: '/', name: 'Encrypt / Decrypt' },
		{ route: '/about', name: 'About' },
		{ route: '/qrcode', name: 'QR code Generator' }
	];

</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>


<!-- <AppShell>...</AppShell> -->

<!-- #################################################################################################### -->
<nav style="display: grid; justify-content: center ; " >


	<Drawer position="left">
		<span slot="close">X</span>
		{#if $drawerStore.id === 'example-1'}
		<a href="/" on:click={() => drawerStore.close()}> <br> &nbsp;&nbsp Encrypt / Decrypt</a>
		<a href="/qrcode"on:click={() => drawerStore.close()}> <br>&nbsp;&nbsp QR Code Generator</a>
		<a href="/about"on:click={() => drawerStore.close()}> <br>&nbsp;&nbsp About</a>
		{/if}
	</Drawer>
	

	
	
	<button  on:click={() => drawerStore.open({ id: 'example-1', width: 'w-[200px] md:w-[320px]',
		padding: 'p-4',
		rounded: 'rounded-xl', })}
		>
    Menu
  </button>




</nav>


<!-- #################################################################################################### -->

<style>


	nav {
		display: flex;
		align-items: center;
		height: 50px;
		width: 100%;
		padding: 0 32px;
		

	
		background: linear-gradient(#1e88e5, #9291dc);
		

		border-bottom: 0px solid rgba(34,40,49,0.3);
	}


 
	
</style>