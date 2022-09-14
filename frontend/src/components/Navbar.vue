<template>
  <nav class="flex justify-between items-center w-full border-b border-gray-200 py-[20px]">
    <router-link to="/">
      <h1 class="text-[30px] uppercase font-bold text-gray-500">
        Food Delights
      </h1>
    </router-link>
    <router-link :to="{path: '/add'}">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="44" height="44"
        viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      Add Item
    </button>
  </router-link>
  </nav>

</template>

<script>
export default {
  name: "c-Navbar",
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">

</style>