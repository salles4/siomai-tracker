<script>
  import { pop } from "svelte-spa-router";
  import Title from "../lib/Title.svelte";
  import { fade } from "svelte/transition";
  import Navbar from "../lib/Navbar.svelte";
  import moment from "moment";
  import Label from "../lib/Label.svelte";

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

<Navbar title="Add Expenses" />
<main
  in:fade={{ duration: 500 }}
  class="bg-base-200 flex justify-center items-center mx-2 md:px-0"
>
  <form on:submit|preventDefault={submit} class="w-[540px]">
    <Label label="Date">
      <input
        type="date"
        class="input input-bordered w-full"
        placeholder="Date"
        value={moment().format("YYYY-MM-DD")}
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
    <button class="btn btn-primary w-full"> Save </button>
  </form>
</main>
