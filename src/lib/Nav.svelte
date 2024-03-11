<script lang="ts">


import { autoModeWatcher } from '@skeletonlabs/skeleton';
import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
import { initializeStores } from '@skeletonlabs/skeleton';

initializeStores();



const drawerStore = getDrawerStore();


	const links = [
		{ route: '/', name: 'Home' },
		{ route: '/about', name: 'About' },
		{ route: '/qrcode', name: 'QR code Generator' }
	];

	 import { title } from '$lib/titleStore';

</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>



<nav style="display: flex; justify-content: space-between; align-items: center; " >


	<Drawer position="left">
		<span slot="close">X</span>
		{#if $drawerStore.id === 'example-1'}
		<a href="/" on:click={() => drawerStore.close()}> <br> &nbsp;&nbsp Home</a>
		<a href="/qrcode"on:click={() => drawerStore.close()}> <br>&nbsp;&nbsp QR Code Generator</a>
		<a href="/about"on:click={() => drawerStore.close()}> <br>&nbsp;&nbsp About</a>
		{/if}
	</Drawer>
	
	
	
	 <button  title="Menu" 	on:click={() => drawerStore.open({ id: 'example-1', width: 'w-[200px] md:w-[320px]', padding: 'p-4', rounded: 'rounded-xl', })}>
    <!-- Menu icon lines -->
    <div></div>
    <div></div>
    <div></div>
  </button>

  <span style="flex-grow: 1; text-align: center; display: block; font-weight: bold; font-size: 22px;"
    class="bg-gradient-to-br from-white to-gray bg-clip-text 
    text-transparent box-decoration-clone">{$title}</span>

  

</nav>



<style>

	nav {
		position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    z-index: 1000; 
    display: flex;
 	  justify-content: space-between;
 		align-items: center;
		display: flex;
		align-items: center;
		height: 60px;
		width: 100%;
		padding: 0 32px;
		background: linear-gradient(to bottom, rgba(10,10,10,1) 0%, rgba(0,0,0,0) 100%)
		}

	div {
  width: 15px;
  height: 2px;
  background-color: white;
  margin: 3px 0;
}




</style>