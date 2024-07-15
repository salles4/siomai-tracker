<script>
  import Router, { pop } from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Revenue from "./pages/Revenue.svelte";
  import Expenses from "./pages/Expenses.svelte";
  import AddRevenue from "./pages/AddRevenue.svelte";
  import AddExpenses from "./pages/AddExpenses.svelte";

  import { location } from "svelte-spa-router";
  import Navbar from "./lib/Navbar.svelte";
  import RevenueDetails from "./pages/RevenueDetails.svelte";
  import ExpensesDetails from "./pages/ExpensesDetails.svelte";
  
  let logoClass = "h-[40vh]"
  let imgSize = "h-36"
  let sideLogoClass = "hidden"
  let colNum = "1"

  $: if($location == "/"){
    logoClass = "h-[40dvh]"
    imgSize = "h-36"
    sideLogoClass = "hidden"
    colNum = "1"
  }else{
    logoClass = "h-auto"
    imgSize = "h-12"
    sideLogoClass = "block"
    colNum = "3"
  }


</script>
<Router routes={{
  '/': Home,
  '/revenue': Revenue,
  '/expenses': Expenses,
  '/add-revenue': AddRevenue,
  '/add-expenses': AddExpenses,
  '/revenue/:id': RevenueDetails,
  '/expenses/:id': ExpensesDetails,
}} />