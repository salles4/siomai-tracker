<script>
  import { fly } from "svelte/transition";
  import Navbar from "../lib/Navbar.svelte";
  import { cubicOut } from "svelte/easing";
  import ExpensesCard from "../lib/ExpensesCard.svelte";

  let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
</script>
<Navbar title="Expenses" />
<main in:fly={{duration:500, y:200, easing:cubicOut}} >
  <div class="flex flex-col items-center md:w-[50%] w-[100%] m-auto justify-center">
    {#each arr as ar, index}
    <ExpensesCard id={index}/>
    {/each}
  </div>
</main>