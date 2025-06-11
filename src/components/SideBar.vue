<template>
  <div class="flex flex-col md:flex-row gap-6">
    <!-- Sidebar (Bara laterală pentru filtre) -->
    <div class=" bg-white px-4 pb-6 shadow rounded w-72 max-h-[1000vh] overflow-y-auto">
      <!-- Conținutul sidebar-ului -->
      <div class="divide-y divide-gray-300 space-y-5">
        <!-- Filtru pentru categorii -->
        <FilterSection title="Categories" :items="categories" /> 
        <!-- Filtru pentru branduri -->
        <FilterSection title="Brands" :items="brands" />
        <!-- Filtru pentru disponibilitate -->
        <FilterSection title="Disponibilitate" :items="stoc" />
        
        <!-- Filtru pentru preț -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
          <!-- Două câmpuri de introducere a valorilor minime și maxime -->
          <div class="mt-4 flex items-center">
            <input
              type="text"
              class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
              placeholder="min"  
            />
            <span class="mx-3 text-gray-500">-</span>
            <input
              type="text"
              class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
              placeholder="max" 
            />
          </div>
        </div>
      </div>
    </div>

    
    <div class="w-full md:w-3/4">
      <Products />
    </div>
  </div>
</template>

<script>
import FilterSection from "./FilterSection.vue";


export default {
  components: {
    FilterSection, 
  },
  data() {
    return {
      categories: [
        { name: "Piese Biciclete", count: 15, link: "piese_biciclete.html" },
        { name: "Unelte electrice", count: 15, link: "unelte_electrice.html" },
        { name: "Unelte de mana", count: 15, link: "unelte_de_mana.html" },
        { name: "Gradina", count: 15, link: "gradina.html" },
        { name: "Instalatii sanitare", count: 15, link: "instalatii_sanitare.html" },
        { name: "Feronerie", count: 15, link: "feronerie.html" },
      ],
      
      brands: [
        { name: "EvoTools", count: 15 },
        { name: "EvoTools +Plus", count: 15 },
        { name: "EvoSanitary", count: 15 },
        { name: "EvoSanitary +Plus", count: 15 },
      ],
      
      stoc: [{ name: "Disponibil in stoc", count: 15 }],
    };
  },
};
</script>

<style scoped>

ul {
  padding: 0;
  margin: 0;
  list-style: none; 
}

li {
  word-wrap: break-word; 
  white-space: normal; 
}
</style>
