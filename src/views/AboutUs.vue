<template>
    <div>
      <Header />
      <AboutUs />
    </div>
  </template>
  
  <script>
  import AboutUs from "../components/AboutUs.vue";
  import Header from "../components/Header.vue";
  
  export default {
    name: "About",
    components: {
      AboutUs,Header,
    },
  };
  </script>
  
  <style scoped>
  /* Stiluri suplimentare pentru această pagină, dacă este necesar */
  </style>
  