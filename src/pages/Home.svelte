<script>
  import { fade } from "svelte/transition";
  import Stats from "../lib/Stats.svelte";

  window.scrollTo(0, document.body.scrollHeight);
</script>

<main in:fade={{ duration: 500 }}>
  <div class="justify-around h-[100dvh] items-center flex flex-col">
    <div class="flex flex-col justify-center items-center">
      <img
        src="./2024logo.png"
        alt=""
        class="transition-all ease-in-out duration-500 object-contain h-36"
      />
      <p class="font-bold">July 2024 Report</p>
      <Stats />
    </div>


    <div>
      <label
        for="my_modal_6"
        class="btn btn-primary shadow-sm shadow-primary text-lg"
      >
        <i class="bi bi-plus-circle-fill"></i> Add</label
      >
    </div>
  </div>
</main>

<!-- modal -->
<input type="checkbox" id="my_modal_6" class="modal-toggle" />
<div class="modal modal-bottom" role="dialog">
  <div class="modal-box md:w-[40%] sm:w-auto place-self-center self-end">
    <div class="w-[100%] flex justify-around">
      <a href="./#/add-revenue">
        <button class="btn btn-primary btn-outline size-32 flex flex-col">
          <img src="./peso_in_logo.png" alt="peso in" class="h-16" />
          Revenue
        </button>
      </a>
      <a href="./#/add-expenses">
        <button class="btn btn-primary btn-outline size-32 flex flex-col">
          <img src="./peso_out_logo.png" alt="peso in" class="h-16" />
          Expenses
        </button>
      </a>
    </div>
    <div class="modal-action justify-center">
      <label for="my_modal_6" class="btn">Close</label>
    </div>
  </div>
  <label class="modal-backdrop" for="my_modal_6">Close</label>
</div>