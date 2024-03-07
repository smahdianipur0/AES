<script lang="ts">

	
  import { QRCodeImage } from "svelte-qrcode-image";
  import { autoModeWatcher } from '@skeletonlabs/skeleton';
  
  
	let tex = '';

	function isValid(tex: string) {
    return (
      tex !== ""
    );
	}

import { title } from '$lib/titleStore';
  title.set('QR Code Generator');
	
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>




<div style="display: grid; justify-content: center;">
<div class="card p-4 variant-glass-surface m-2 shadow-xl" style="width: 340px; ">

	<form style="display: grid; justify-content: center;">
		<textarea class="textarea m-2 shadow-xl" rows="2" style="width: 300px;
         background: rgba(75,75,75,0.01);
         -webkit-backdrop-filter: blur(23px);
         backdrop-filter: blur(23px); "
			id="text_0"
			bind:value="{tex}"
			placeholder="Text"/>

	</form > 
	<br>

{#if isValid(tex)}
	<p style="display: grid; justify-content: center;">
	<QRCodeImage text={tex} width={160} height={160} margin={1} />
</p>

{:else}
<p style="display: grid; justify-content: center;" >Please enter some text.</p>
{/if}

</div> </div>


<style>

 .textarea.m-2:not(:focus) {
  border-color: #1f1f29 !important; 
}
	
	
</style>