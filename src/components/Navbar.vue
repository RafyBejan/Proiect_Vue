<template>
  <nav class="bg-gray-800">
    <div class="container flex">
      <!-- All category -->
      <div
        class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group"
      >
        <span class="text-white">
          <i class="fas fa-bars"></i>
        </span>
        <span class="capitalize ml-2 text-white">All categories</span>

        <div
          class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"
        >
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              :src="category.icon"
              class="w-5 h-5 object-contain"
              alt="icon"
            />
            <span class="ml-6 text-gray-600 text-sm">{{ category.name }}</span>
          </div>
        </div>
      </div>
      <!-- All category end -->

      <!-- Navbar links -->
      <div class="flex items-center justify-between flex-grow pl-12">
        <div class="flex items-center space-x-6 capitalize">
          <a
            v-for="(link, index) in navLinks"
            :key="index"
            :href="link.href"
            class="text-gray-200 hover:text-white transition"
          >
            {{ link.label }}
          </a>
        </div>
        <a href="#" class="text-gray-200 hover:text-white transition"
          >Login/Register</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      categories: [
        {
          name: "Piese Biciclete",
          icon: "/src/assets/icons/bicycle-svgrepo-com.svg",
        },
        {
          name: "Unelte electrice",
          icon: "/src/assets/icons/drill-svgrepo-com.svg",
        },
        {
          name: "Unelte de mana",
          icon: "/src/assets/icons/wrench-svgrepo-com.svg",
        },
        { name: "Gradina", icon: "/src/assets/icons/shovel-svgrepo-com.svg" },
        {
          name: "Instalatii sanitare",
          icon: "/src/assets/icons/sink-svgrepo-com.svg",
        },
        { name: "Feronerie", icon: "/src/assets/icons/door-svgrepo-com.svg" },
      ],

      navLinks: [
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
        { label: "About us", href: "/about" },
        { label: "Contact", href: "/contact" },
        {label:"LoginRegister",href:"/LoginRegister"},
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
