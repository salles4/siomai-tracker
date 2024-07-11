<script>
  import { pop } from "svelte-spa-router";
  export let title
</script>

<div>
    <div class="mb-4 font-bold text-2xl">
      <button class="btn btn-outline btn-primary" on:click={pop}>
        <i class="bi bi-arrow-left"></i>
      </button> {title}
    </div>
  </div>