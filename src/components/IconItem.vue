<template>
    <div class="flex items-center space-x-2">
      <div class="relative">
        <i :class="icon" class="text-gray-600 text-xl"></i>
        <span
          v-if="count"
          class="absolute -top-2 -right-2 text-xs font-semibold w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
        >
          {{ count }}
        </span>
      </div>
      <span class="text-sm text-gray-600">{{ label }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      count: {
        type: String,
        default: null,
      },
    },
  };
  </script>
  