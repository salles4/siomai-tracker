<script>
  import { pop } from "svelte-spa-router";
  import Title from "../lib/Title.svelte";
  import { fade } from "svelte/transition";
</script>

<main
  in:fade={{duration:500}}
  class="min-h-[90vh] bg-base-200 flex flex-col justify-center items-center"
>
  <Title title="Add Expenses" />
  <input
    type="file"
    accept="image/*"
    capture
    class="file-input w-full max-w-xs"
  />
</main>
