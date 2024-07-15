<script>
  import { fly } from "svelte/transition";
  import Navbar from "../lib/Navbar.svelte";
  import { cubicOut } from "svelte/easing";

  export let params;
  const id = params.id;
</script>

<Navbar title="Expense Details" />
<main in:fly={{duration:500, y:200, easing:cubicOut}}>
  <div class="flex justify-center font-bold text-lg">
    {id}
  </div>
</main>