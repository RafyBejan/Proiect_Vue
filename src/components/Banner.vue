<template>
    <div
      class="bg-cover bg-no-repeat bg-center py-16 sm:py-24 md:py-36"
      :style="{ backgroundImage: `url(${bannerImage})` }"
    >
      <div class="container">
        <h1 class="text-6xl text-gray-500 font-medium mb-4 capitalize">
          Best Quality Tools <br /> For Your Workshop
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quisquam, quod.
        </p>
        <div class="mt-12">
          <a
            href="#"
            class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
          >
            Shop now
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
    data() {
      return {
        bannerImage:
          "src/assets/icons/o05-a_anti-fake-communication-banners_1920x768.jpg",
      };
    },
  };
  </script>
  
 
  