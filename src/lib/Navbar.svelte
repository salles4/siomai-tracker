<script>

  import { pop } from "svelte-spa-router";

</script>
<div class="grid grid-cols-3 m-auto w-[90dvw] bg-base-200 transition-all ease-in-out duration-500">
  <div class="self-center">
    <button class="btn btn-sm btn-primary" on:click={pop}>
        <i class="bi bi-arrow-left"></i>
    </button> 
  </div>
  <div class="flex flex-col justify-center items-center grow">
    <img src="./2024logo.png" alt="" class="transition-all ease-in-out duration-500 object-contain h-12" />
    <p class="font-bold">July 2024 Report</p>
  </div>
  <div class="font-bold content-center text-end">
    July 2024
  </div>
</div>