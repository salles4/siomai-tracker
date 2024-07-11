<script>
  import { fade } from "svelte/transition";
  import Title from "../lib/Title.svelte";

</script>
<main in:fade={{duration:500}} class="min-h-[90vh] flex justify-center">
  <Title title="Revenue" />
</main>