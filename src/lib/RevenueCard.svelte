<script>
  import { fly, slide } from "svelte/transition";
  export let id;
</script>

<a
  href="./#/revenue/{id}"
  class="card w-[100%] mt-1 bg-base-100 hover:bg-primary hover:text-white cursor-pointer"
  in:fly|global
>
<div class="card-body py-4 flex-row justify-between items-center">
  <div class="flex items-center gap-5">

    <div class="text-center">
      <div>Thu</div>
      <div class="text-xs font-bold">07/12</div>
    </div>

    <div class="">Villa Antonina</div>
    
  </div>
  <div class="font-bold text-lg">₱1000</div>
</div>
</a>
