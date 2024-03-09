<script lang="ts" >

  import { autoModeWatcher }  from '@skeletonlabs/skeleton';
  import { initializeStores } from '@skeletonlabs/skeleton';  
  import { clipboard }        from '@skeletonlabs/skeleton';


  //Title
  import { title } from '$lib/titleStore';
  title.set('Encrypt / Decrypt');


  //Rust Functions
  import { encrypt }         from "$lib/pkg/rust_lib";
  import { decrypt }         from "$lib/pkg/rust_lib";
  import { count_characters} from "$lib/pkg/rust_lib";

  let Key = '';
  let IV = '';

  let plain_text = '';
  let cipher_text = '';

  let result_e = '';
  let result_d = '';

  $: result_e = encrypt(Key,IV,plain_text);
  $: result_d = decrypt(Key,IV,cipher_text);
  $: Key_count = count_characters(Key);
  $: IV_count = count_characters(IV);

  function isValid_e(result_e: string) {
    return (
      result_e !== "IV is not 16 Characters" &&
      result_e !== "Key is not 16 Characters" &&
      result_e !== ""
    )}

  function isValid(result_d: string) {
    return (
      result_d !== "IV is not 16 Characters" &&
      result_d !== "Key is not 16 Characters" &&
      result_d !== "Invalid Credentials"&&
      result_d !== ""
    )}


 //Tab
  import { TabGroup, Tab } from '@skeletonlabs/skeleton';
  let tabSet: number = 1;


  //Qr code
  import { QRCodeImage } from "svelte-qrcode-image";

  let showQR_e = false;
  let showQR_d = false;

  function toggleQR_e() {
    showQR_e = !showQR_e
  }

  function toggleQR_d() {
    showQR_d = !showQR_d
  }


  //Toast
  import       { Toast, getToastStore } from '@skeletonlabs/skeleton';
  import type  { ToastSettings }        from '@skeletonlabs/skeleton';

  initializeStores();
  const toastStore = getToastStore();
  
  const t: ToastSettings = {
    message: 'Copied to Clipboard',
    background: 'variant-glass-primary',
    hideDismiss: true,
    timeout: 1500 }
  

</script>



<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>


<div  style="display: grid; justify-content: center;">
<div class="card p-4 variant-glass-surface m-2 shadow-xl" style="width: 340px; ">

<div class="container">
  <input class="input m-1 input-style" placeholder="Key" bind:value={Key} />
  <span class="key-indicator">
    {#if Key}
      {Key_count}
    {/if}
  </span>
</div>
  

<div class="container">
  <input class="input m-1 input-style" placeholder="IV" bind:value={IV} />
  <span class="key-indicator">
    {#if IV}
      {IV_count}
    {/if}
  </span>
</div>
</div>





<div class="card p-4 variant-glass-surface m-2 shadow-xl" style="width: 340px; ">
<Toast/>
<TabGroup justify="justify-center">
  <Tab bind:group={tabSet} name="Encrypt" value={1}>
  Encrypt </Tab>

  <Tab bind:group={tabSet} name="Decrypt" value={2}>
  Decrypt</Tab>
 
  <svelte:fragment slot="panel">
   
  {#if tabSet === 1}


<form class="form-container">
  <textarea class="textarea m-2 shadow-xl textarea-style" rows="2"
    id="text_0" bind:value={plain_text} placeholder="Plain Text"></textarea>
</form>

{#if Key && IV}
  <form class="form-container">
    <textarea class="textarea m-1 textarea-style-readonly" rows="2" 
      bind:value={result_e} title="Input (readonly)" readonly tabindex="-1"></textarea>
  </form>
   
  <div class="btn-group-container">
    <div class="btn-group variant-glass-primary m-2">
      <button type="button" use:clipboard={result_e} on:click={() => toastStore.trigger(t)}
        disabled={!isValid(result_e)}>Copy</button>
      <button type="button" on:click={toggleQR_e} disabled={!isValid(result_e)}>
        Show QR Code
      </button>
    </div>
  </div>
  <br>
  {#if showQR_e && isValid(result_e)}
    <p class="qr-code-container">
      <QRCodeImage text={result_e} width={160} height={160} margin={1} />
    </p>
  {/if}
{:else}
  <p class="form-container">Please enter a key and an IV.</p>



  {/if}
    {:else if tabSet === 2}


   <form class="form-container">
  <textarea class="textarea m-2 shadow-xl textarea-style" rows="2"
    id="text_1" bind:value={cipher_text} placeholder="Cipher Text"></textarea>
</form>

{#if Key && IV}
  <form class="form-container">
    <textarea class="textarea m-1 textarea-style-readonly" rows="2" 
      bind:value={result_d} title="Input (readonly)" readonly tabindex="-1"></textarea>
  </form>

  <div class="form-container">
    <div class="btn-group variant-glass-primary m-2">
      <button type="button" use:clipboard={result_d} on:click={() => toastStore.trigger(t)}
        disabled={!isValid(result_d)}>Copy</button>
      <button type="button" on:click={toggleQR_d} disabled={!isValid(result_d)}>
        Show QR Code
      </button>
    </div>
  </div>
  <br>
  {#if showQR_d && isValid(result_d)}
    <p class="form-container">
      <QRCodeImage text={result_d} width={160} height={160} margin={1} />
    </p>
  {/if}
{:else}
  <p class="form-container">Please enter a key and an IV.</p>
{/if}
    {/if}
  </svelte:fragment>
</TabGroup>
</div>
</div>


<style>



 .container {
    position: relative;
    width: 300px;
  }
  .input-style {
    width: calc(100% - 1px);
    background: rgba(7, 7, 7, 0.1);
    -webkit-backdrop-filter: blur(23px);
    backdrop-filter: blur(23px);
    padding-right: 30px;
  }
  .key-indicator {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: #777;
    pointer-events: none;
  }
 .form-container {
    display: grid;
    justify-content: center;
  }
  .textarea-style {
    width: 300px;
    background: rgba(7, 7, 7, 0.1);
    -webkit-backdrop-filter: blur(23px);
    backdrop-filter: blur(23px);
  }
  .textarea-style-readonly {
    width: 300px;
    background-color: rgba(1, 1, 1, 0.01);
  }
  .btn-group-container {
    display: grid;
    justify-content: center;
  }
  .qr-code-container {
    display: grid;
    justify-content: center;
  }

   .input.m-1:not(:focus) {
  border-color: #1f1f29 !important; 
}
 
 .textarea.m-2:not(:focus) {
  border-color: #1f1f29 !important; 
}
</style>