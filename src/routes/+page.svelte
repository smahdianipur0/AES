<script lang="ts" >

	import { encrypt } from "$lib/pkg/rust_lib";
	import { decrypt } from "$lib/pkg/rust_lib";
  import { count_characters} from "$lib/pkg/rust_lib";
  import { QRCodeImage } from "svelte-qrcode-image";
  
  import { autoModeWatcher } from '@skeletonlabs/skeleton';
  import { clipboard } from '@skeletonlabs/skeleton';
  import { Toast, getToastStore } from '@skeletonlabs/skeleton';
  import { initializeStores } from '@skeletonlabs/skeleton';
  import type { ToastSettings } from '@skeletonlabs/skeleton';
  import { TabGroup, Tab } from '@skeletonlabs/skeleton';
  
let tabSet: number = 1;

  initializeStores();
  const toastStore = getToastStore();
  
  const t: ToastSettings = {
	  message: 'Copied to Clipboard',
	  timeout: 1500
    };
  

  

	let Key = '';
	let IV = '';
	let plain_text = '';
  let cipher_text = '';
	
  let result_e = '';
  let result_d = '';
  let showQR_e = false;
  let showQR_d = false;





  $: result_e = encrypt(Key,IV,plain_text);
  $: result_d = decrypt(Key,IV,cipher_text);
  $: Key_count = count_characters(Key);
  $: IV_count = count_characters(IV);


  function toggleQR_e() {
    showQR_e = !showQR_e;
  }

  function toggleQR_d() {
    showQR_d = !showQR_d;
  }

  function isValid_e(result_e: string) {
    return (
      result_e !== "IV is not 16 Characters" &&
      result_e !== "Key is not 16 Characters" &&
      result_e !== ""
    );
  }

  function isValid(result_d: string) {
    return (
      result_d !== "IV is not 16 Characters" &&
      result_d !== "Key is not 16 Characters" &&
      result_d !== "Invalid Credentials"&&
      result_d !== ""
    );
  }


</script>




<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>


<h1 class="h3" >
	<span style="display: grid; justify-content: center;"
  class="bg-gradient-to-br from-blue-500 to-purple-300 bg-clip-text 
  text-transparent box-decoration-clone">Encrypt / Decrypt </span>
</h1>

<br>

<div  style="display: grid; justify-content: center;">
<div class="card p-4 variant-soft m-2" style="width: 340px; ">
<p >
  
  <Toast />

  &nbsp;&nbsp;&nbsp;
  <input class="input m-1"style="width: 200px " placeholder="Key" bind:value={Key} /> 
  {#if Key}
  &nbsp;&nbsp; {Key_count}
  {/if}
  
</p>

<p>
  &nbsp;&nbsp;&nbsp;
  <input class="input m-1 "style="width: 200px " placeholder="IV" bind:value={IV} />
  {#if IV}
  &nbsp;&nbsp; {IV_count}
  {/if}
</p>

</div>





<div class="card p-4 variant-soft m-2" style="width: 340px; ">
<TabGroup justify="justify-center">
  
  <Tab bind:group={tabSet} name="Encrypt" value={1}>

  Encrypt

</Tab>
  <Tab bind:group={tabSet} name="Decrypt" value={2}>

  Decrypt

</Tab>
  <!-- Tab Panels --->
  <svelte:fragment slot="panel">
   
    {#if tabSet === 1}
      <form style="display: grid; justify-content: center;">
      <textarea class="textarea m-2" rows="2" style="width: 250px "
        id="text_0"
        bind:value="{plain_text}"
        placeholder="Plain Text"/>

    </form >

    {#if Key && IV}
    <form style="display: grid; justify-content: center;">
    <textarea class="textarea m-2" rows="2" style="width: 250px; "value="{result_e}"
    title="Input (readonly)" type="text"   readonly="true" tabindex="-1" />
     </form>
     
     <div style="display: grid; justify-content: center;">
     <div class="btn-group bg-gradient-to-br variant-gradient-primary-secondary">
    
    <button type="button"  use:clipboard={result_e} on:click={() => toastStore.trigger(t)}
    disabled={!isValid(result_e)}>Copy</button>
    
    <button type="button" 
    on:click={toggleQR_e} disabled={!isValid(result_e)}>
      Show QR Code
    </button>
  </div>
</div>
<br>
    {#if showQR_e && isValid(result_e)}
      <p style="display: grid; justify-content: center;">
      <QRCodeImage text={result_e} width={160} height={160} margin={1} />
    </p>
    {/if}
  {:else}
    <p style="display: grid; justify-content: center;" >Please enter a key and an IV.</p>


  {/if}
    {:else if tabSet === 2}


    <form style="display: grid; justify-content: center;">
      <textarea class="textarea m-2" rows="2" style="width: 250px "
        id="text_1"
        bind:value="{cipher_text}"
        placeholder="Cipher Text"/>
      
    </form>
    {#if Key && IV}
    <form style="display: grid; justify-content: center;">

    <textarea class="textarea m-2" rows="2" style="width: 250px" value="{result_d}"
    title="Input (readonly)" type="text"  readonly="true" tabindex="-1" />
    </form>

     <div style="display: grid; justify-content: center;">
    <div class="btn-group bg-gradient-to-br variant-gradient-primary-secondary">
    <button type="button"  use:clipboard={result_d} on:click={() => toastStore.trigger(t)}
    disabled={!isValid(result_d)}>Copy</button>

    <button type="button" 
    on:click={toggleQR_d} disabled={!isValid(result_d)}>
      Show QR Code
    </button>
  </div>
     </div>
     <br>
    {#if showQR_d && isValid(result_d)}
    <p style="display: grid; justify-content: center;">
      <QRCodeImage text={result_d} width={160} height={160} margin={1} />
    </p>
    {/if}
  {:else}
    <p style="display: grid; justify-content: center;">Please enter a key and an IV.</p>
  {/if}



    {/if}
  </svelte:fragment>
</TabGroup>
</div>


</div>
