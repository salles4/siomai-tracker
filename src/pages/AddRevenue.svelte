<script>
  import { pop } from "svelte-spa-router";
  import Title from "../lib/Title.svelte";
  import { fade } from "svelte/transition";
</script>

<main
  in:fade={{ duration: 500 }}
  class="min-h-[90vh] bg-base-200 flex flex-col justify-center items-center"
>
  <Title title="Add Revenue" />
  <input
    type="file"
    accept="image/*"
    capture
    class="file-input w-full max-w-xs"
  />
  <label class="input input-bordered flex items-center gap-4 my-2">
    Name
    <input type="text" class="grow" placeholder="Daisy" />
  </label>
</main>
