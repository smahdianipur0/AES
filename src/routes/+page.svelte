<script lang="ts" >

  import { autoModeWatcher }  from '@skeletonlabs/skeleton';
  import { initializeStores } from '@skeletonlabs/skeleton';  
  import { clipboard }        from '@skeletonlabs/skeleton';


  //Title
  import { title } from '$lib/titleStore';
  title.set('Home');


  //Rust Functions
  import { encrypt }           from "$lib/pkg/rust_lib";
  import { decrypt }           from "$lib/pkg/rust_lib";
  import { count_characters }  from "$lib/pkg/rust_lib";
  import { generate_password } from "$lib/pkg/rust_lib";

  let password_length = 16
  let add_special_char = true  
  let add_number = true
  let capitalize_first_letter = true
  

  let Key = '';
  let IV = '';

  let plain_text = '';
  let cipher_text = '';

  let result_e = '';
  let result_d = '';

  $: password = generate_password(password_length,add_special_char,add_number,capitalize_first_letter);
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


 //password picker
  import { RangeSlider } from '@skeletonlabs/skeleton';
  import { SlideToggle } from '@skeletonlabs/skeleton';
  let min = 12;
  let value = 16;
  let max = 20;


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

<Toast/>
<div  style="display: grid; justify-content: center;">

<div class="card p-4 variant-glass-surface m-2 shadow-xl" style="width: 340px; ">

<div class="container">

    <RangeSlider name="range-slider" bind:value={password_length} min={12} max={20} step={1} ticked>
      <div class="flex justify-between items-center">
        <div>Password Length</div>
        <div class="text-xs">{password_length}</div>
      </div>
    </RangeSlider>

      <br>

    <label class="flex items-center space-x-2">
    <input class="checkbox" type="checkbox"  bind:checked={capitalize_first_letter} />
    <p>capitalize</p>
    </label>

    <label class="flex items-center space-x-2">
    <input class="checkbox" type="checkbox"  bind:checked={add_number} />
    <p>Number</p>

    </label>
    <label class="flex items-center space-x-2">
    <input class="checkbox" type="checkbox"  bind:checked={add_special_char} />
    <p>Special Characters</p>
    </label>





<div class="password-container">
  <textarea class="textareap m-1 textarea-style-readonly" rows="1" 
    bind:value={password} title="Input (readonly)" readonly tabindex="-1"></textarea>
  <div class="btn-group variant-glass-primary m-2">
      <button type="button" use:clipboard={password} on:click={() => toastStore.trigger(t)}
        >Copy</button>
 </div>       
</div>


  
</div>
</div>
  

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

.password-container {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
}

.textarea {
  flex-grow: 1; 
  margin-right: 0.5rem; 
}

.textareap {
  flex-grow: 1; 
  margin-right: 0.5rem; 
  max-width: 65%;
  border-color: #1f1f29 ;
  border-radius:8px

}

 .container {
    position: relative;

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
  max-width: 97%;
}
 
 .textarea.m-2:not(:focus) {
  border-color: #1f1f29 !important; 
}
</style>