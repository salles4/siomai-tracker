<script>
  import { pop } from "svelte-spa-router";
  import Title from "../lib/Title.svelte";
  import { fade } from "svelte/transition";
  import Navbar from "../lib/Navbar.svelte";
  import Revenue from "./Revenue.svelte";
  import Label from "../lib/Label.svelte";
</script>

<Navbar title="Add Revenue" />
<main
  in:fade={{ duration: 500 }}
  class="bg-base-200 grid justify-center items-center md:px-0"
>
  <Label label="Date">
    <input
      type="date"
      class="input input-bordered w-full"
      placeholder="Date"
      value={new Date()}
    />
  </Label>
  <Label label="Picture">
    <input
      type="file"
      accept="image/*"
      capture
      class="file-input w-full"
    />
  </Label>
  <Label label="Name">
    <input type="text" class="input w-full input-bordered" placeholder="Daisy" />
  </Label>
</main>
