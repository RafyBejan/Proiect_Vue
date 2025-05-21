<template>
    <div class="container py-4 flex items-center gap-3">
      <a href="/" class="text-primary text-base">
        <i class="fas fa-home"></i>
      </a>
      <span class="text-sm text-gray-400">
        <i class="fas fa-chevron-right"></i>
      </span>
      <p class="text-gray-600 font-medium">{{ currentPage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: String,
        required: true, 
      },
    },
  };
  </script>
  
  <style scoped>
   
  </style>
  