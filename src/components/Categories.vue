<template>
    <div class="container py-16">
      <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">Shop by category</h2>
  
      <div class="grid grid-cols-3 gap-3">
        <!-- single category -->
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="relative rounded-sm overflow-hidden group"
        >
          <img :src="category.image" class="w-full" alt="Category Image" />
          <a
            :href="category.link"
            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            {{ category.name }}    
          </a>
        </div>
        <!-- single category end -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Categories",
    data() {
      return {
        categories: [
          {
            name: "Piese Biciclete",
            image: "/src/assets/categories/machined-bike-parts.jpg",
            link: "#",
          },
          {
            name: "Unelte Electrice",
            image: "/src/assets/categories/Power-Tools-banner.webp",
            link: "#",
          },
          {
            name: "Unelte de mana",
            image: "/src/assets/categories/types-of-tools_1024x1024.jpg",
            link: "#",
          },
          {
            name: "Gradina",
            image:
              "/src/assets/categories/Best-Gardening-Tools-Names-with-Pictures-and-Their-Uses.webp",
            link: "#",
           
          },
          {
            name: "Instalatii sanitare",
            image:
              "/src/assets/categories/jansen-prima-hochtemperaturbereich-mit-trinkwasserzulassung.jpg",
            link: "#",
          },
          {
            name: "Feronerie",
            image: "/src/assets/categories/images.jpg",
            link: "#",
            
          },
        ],
      };
    },
  };
  </script>
  
  
  