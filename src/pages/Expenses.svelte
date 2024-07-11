<script>
  import { pop } from "svelte-spa-router";
  import Title from "../lib/Title.svelte";
  import { fade } from "svelte/transition";
</script>

<div in:fade={{duration:500}} class="min-h-[90vh] flex justify-center">
  <Title title="Expenses" />
</div>
