<script>
  import { pop } from "svelte-spa-router";
  import Title from "../lib/Title.svelte";
  import { fade } from "svelte/transition";
  import Navbar from "../lib/Navbar.svelte";
  import Revenue from "./Revenue.svelte";
  import Label from "../lib/Label.svelte";
  import moment from "moment";

  let files;
  let fileInput;
  let previewClass = "block";
  let previewSrc;

  $: if (files && files[0]) {
    previewClass = "";
    const img = URL.createObjectURL(files[0]);
    previewSrc = img;
  } else {
    previewClass = "hidden";
  }

  function submit(){
    
  }
</script>

<Navbar title="Add Revenue" />
<main
  in:fade={{ duration: 500 }}
  class="bg-base-200 w-full md:px-0"
>
  <form on:submit|preventDefault={submit} class="max-w-[540px] m-auto">
    <Label label="Date">
      <input
        type="date"
        class="input input-bordered w-full"
        placeholder="Date"
        value={moment().format("YYYY-MM-DD")}
      />
    </Label>
    <Label label="Location">
      <input
        type="text"
        list="locations"
        class="input w-full input-bordered"
        placeholder="e.g. Villa Antonina"
      />
    </Label>
    <Label label="Amount">
      <input
        type="number"
        class="input w-full input-bordered"
        placeholder="₱xxxxxx"
      />
    </Label>
    <Label label="Picture">
      <input
        type="file"
        accept="image/*"
        capture
        class="file-input w-full"
        bind:files
        bind:this={fileInput}
      />
      <div class="{previewClass} relative mt-2 p-2">
        <img src={previewSrc} alt="Preview" class="object-contain rounded-md" />
        <button
          class="btn btn-sm btn-primary absolute top-4 right-4"
          on:click={() => {
            fileInput.value = "";
            files = "";
          }}>Remove</button
        >
      </div>
    </Label>
    <button class="btn btn-primary my-2 w-full"> Save </button>
  </form>
</main>

<datalist id="locations">
  <option value="Villa Antonina"></option>
  <option value="Holy Trinity Parish"></option>
  <option value="Cuneta"></option>
</datalist>
