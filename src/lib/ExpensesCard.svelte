<script>
  import { slide } from "svelte/transition";
  export let id;
</script>

<a
  href="./#/expenses/{id}"
  class="card w-[100%] mt-1 bg-base-100 hover:bg-primary hover:text-white cursor-pointer"
  in:slide|global
>
<div class="card-body py-4 flex-row justify-between items-center">
  <div class="flex items-center gap-5">

    <div class="text-center">
      <div>Thu</div>
      <div class="text-xs font-bold">07/12</div>
    </div>

    <div class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit?</div>
    
  </div>
  <div class="font-bold text-lg">₱1000</div>
</div>
</a>
