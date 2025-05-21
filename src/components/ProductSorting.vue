<template>
    <!-- Sorting -->
    <div class="flex items-center justify-between mb-4 w-full">
      <!-- Select pentru sortare -->
      <select
        v-model="selectedSorting"
        class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
      >
        <option value="default">Default sorting</option>
        <option value="price-low-high">Price low-high</option>
        <option value="price-high-low">Price high-low</option>
        <option value="latest">Latest product</option>
      </select>
  
      <!-- Spacer -->
      <div class="ml-96"></div>
  
      <!-- Butoanele de sortare -->
      <div class="flex gap-2 ml-auto">
        <!-- Buton grid -->
        <div
          class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer"
          :class="{ 'bg-primary text-white': viewType === 'grid', 'border-gray-300 text-gray-600': viewType !== 'grid' }"
          @click="setViewType('grid')"
        >
          <i class="fas fa-th"></i>
        </div>
  
        <!-- Buton list -->
        <div
          class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer"
          :class="{ 'bg-primary text-white': viewType === 'list', 'border-gray-300 text-gray-600': viewType !== 'list' }"
          @click="setViewType('list')"
        >
          <i class="fas fa-list"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedSorting: "default", // Select pentru sortare
        viewType: "grid", // Tipul de vizualizare (grid sau list)
      };
    },
    methods: {
      setViewType(type) {
        this.viewType = type; //
      },
    },
  };
  </script>
  