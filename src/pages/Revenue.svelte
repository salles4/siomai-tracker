<script>
  import { fade, fly } from "svelte/transition";
  import Title from "../lib/Title.svelte";
  import RevenueCard from "../lib/RevenueCard.svelte";
  import Navbar from "../lib/Navbar.svelte";
  import { cubicIn, cubicInOut, cubicOut } from "svelte/easing";

  let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
</script>
<Navbar title="Revenue" />
<main in:fly={{duration:500, y:200, easing:cubicOut}} >
  <div class="flex flex-col items-center md:w-[50%] w-[100%] m-auto justify-center">
    {#each arr as ar, index}
    <RevenueCard id={index}/>
    {/each}
  </div>
</main>