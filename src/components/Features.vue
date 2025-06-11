<template>
    <div class="container py-16">
      <div class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto justify-center">
        <!-- single feature -->
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
        >
          <img :src="feature.icon" class="w-12 h-12 object-container" />
          <div>
            <h4 class="font-medium capitalize text-lg">{{ feature.title }}</h4>
            <p class="text-gray-500 text-sm">{{ feature.description }}</p>
          </div>
        </div>
        <!-- single feature end -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Features",
    data() {
      return {
        features: [
          {
            icon: "/src/assets/icons/delivery-svgrepo-com.svg",
            title: "Free shopping",
            description: "Order over 400lei",
          },
          {
            icon: "/src/assets/icons/money-back-business-warranty-satisfaction-marketing-guaranted-svgrepo-com.svg",
            title: "Money returns",
            description: "30Days money return",
          },
          {
            icon: "/src/assets/icons/earth-grid-with-24-hours-sign-and-circle-of-arrows-around-svgrepo-com.svg",
            title: "24/7 support",
            description: "Customer support",
          },
        ],
      };
    },
  };
  </script>
  
 
  