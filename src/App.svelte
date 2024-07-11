<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Revenue from "./pages/Revenue.svelte";
  import Expenses from "./pages/Expenses.svelte";
  import AddRevenue from "./pages/AddRevenue.svelte";
  import AddExpenses from "./pages/AddExpenses.svelte";

  import { location } from "svelte-spa-router";
  
  let logoClass = "h-[40vh]"
  let imgSize = "h-36"

  $: if($location == "/"){
    logoClass = "h-[40vh]"
    imgSize = "h-36"
  }else{
    logoClass = "h-[10vh]"
    imgSize = "h-12"
  }


</script>

<div class="flex flex-col justify-end items-center bg-base-200 transition-all ease-in-out duration-700 {logoClass}">
  <img src="./2024logo.png" alt="" class="transition-all ease-in-out duration-700 {imgSize}" />
  <p class="font-bold">July 2024 Report</p>
</div>
<Router routes={{
  '/': Home,
  '/revenue': Revenue,
  '/expenses': Expenses,
  '/add-revenue': AddRevenue,
  '/add-expenses': AddExpenses,

}} />