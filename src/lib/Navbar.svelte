<script>
  import { pop } from "svelte-spa-router";

  export let title = "Navbar"
</script>
<div class="sticky top-0 z-10 shadow-md grid grid-cols-4 m-auto px-4 md:px-20 bg-base-200 transition-all ease-in-out duration-500">
  <div class="self-center">
    <button class="btn btn-sm btn-primary" on:click={pop}>
        <i class="bi bi-arrow-left"></i>
    </button> 
  </div>
  <div class="flex flex-col justify-center items-center col-span-2">
    <img src="./2024logo.png" alt="" class="transition-all ease-in-out duration-500 object-contain h-12" />
    <p class="font-bold text-center">{title}</p>
  </div>
  <div class="font-bold content-center text-end">
    July 2024
  </div>
</div>