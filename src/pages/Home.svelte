<script>
  import Stats from "../lib/Stats.svelte";

  window.scrollTo(0, document.body.scrollHeight);
</script>

<main>
  <div
    class="min-h-[60vh] bg-base-200 justify-between items-center flex flex-col"
  >
    <div class="justify-center items-center flex">
      <Stats />
    </div>
    <div class="grow flex items-center">
      <label
        for="my_modal_6"
        class="btn btn-primary shadow-sm shadow-primary text-lg"
      >
        <i class="bi bi-plus-circle-fill"></i> Add</label
      >
    </div>

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
  </div>
</main>
