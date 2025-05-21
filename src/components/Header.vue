<template>
  <header class="py-4 shadow-sm bg-white">
    <div class="container flex items-center justify-between">
      <!-- Logo -->
      <a href="#">
        <img src="/vite.svg" alt="Logo" class="h-8" />
      </a>

      <!-- Searchbar -->
      <div class="w-full max-w-xl relative flex">
        <span class="absolute left-4 top-3 text-lg text-gray-400">
          <i class="fas fa-search"></i>
        </span>
        <input
          type="text"
          class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-md focus:outline-none"
          placeholder="Search"
        />
        <button
          class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
        >
          Search
        </button>
      </div>

      <!-- Icons -->
      <div class="flex items-center space-x-4">
        <IconItem icon="far fa-heart" label="Wishlist" count="8" />
        <IconItem icon="far fa-shopping-bag" label="Cart" count="8" />
        <IconItem icon="far fa-user" label="Account" />
      </div>
    </div>
  </header>
</template>

<script>
import IconItem from "./IconItem.vue";

export default {
  components: {
    IconItem,
  },
};
</script>
