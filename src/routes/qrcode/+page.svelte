<script lang="ts">

	
  import { QRCodeImage } from "svelte-qrcode-image";
  import { autoModeWatcher } from '@skeletonlabs/skeleton';
  
  
	let tex = '';

	function isValid(tex: string) {
    return (
      tex !== ""
    );
	}

	
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>


<h1 class="h3" >
	<span style="display: grid; justify-content: center;"
  class="bg-gradient-to-br from-blue-500 to-purple-300 bg-clip-text 
  text-transparent box-decoration-clone">QR Code Generator </span>
</h1>
<br>

<div style="display: grid; justify-content: center;">
<div class="card p-4" style="width: 340px; ">

	<form style="display: grid; justify-content: center;">
		<textarea class="textarea" rows="2" style="width: 250px "
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

	
	
</style>