<script>
  export let label;
</script>

<label class="grid grid-cols-3 my-2">
    <span class="font-semibold text-lg m-2"> {label}: </span>
    <div class="col-span-3 md:col-span-2">
      <slot />
    </div>
  </label>