<template>
  <nav class="bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between py-2">
      <!-- All category -->
      <div
        class="px-4 py-2 bg-primary flex items-center cursor-pointer relative group"
      >
        <span class="text-white">
          <i class="fas fa-bars"></i>
        </span>
        <span class="capitalize ml-2 text-white hidden sm:inline">All categories</span>
        <div
          class="absolute w-48 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-20"
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
      <!-- Hamburger button -->
      <button
        class="sm:hidden text-white text-2xl focus:outline-none"
        @click="showMenu = !showMenu"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar links -->
      <div
        :class="[
          'w-full sm:flex sm:items-center sm:w-auto transition-all duration-300',
          showMenu ? 'block' : 'hidden'
        ]"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-6 capitalize">
          <a
            v-for="(link, index) in navLinks"
            :key="index"
            :href="link.href"
            class="text-gray-200 hover:text-white transition py-2 sm:py-0 px-4 sm:px-0"
          >
            {{ link.label }}
          </a>
        </div>
        <a href="#" class="text-gray-200 hover:text-white transition block sm:inline-block py-2 sm:py-0 px-4 sm:px-0"
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
      showMenu: false,
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
        { label: "LoginRegister", href: "/loginRegister" },
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