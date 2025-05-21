<template>
    <div class="pt-4">
      <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">{{ title }}</h3>
      <div class="space-y-2">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center"
        >
          <input
            type="checkbox"
            :id="item.name"
            class="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            :for="item.name"
            class="text-gray-600 ml-3 cursor-pointer"
            :href="item.link || '#'"
          >
            {{ item.name }}
          </label>
          <div class="ml-auto text-gray-600 text-sm" v-if="item.count">
            ({{ item.count }})
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>

<style scoped>
label {
  word-wrap: break-word; 
  white-space: normal; 
}

.flex.items-center {
  display: flex;
  align-items: flex-start; 
  gap: 8px; 
}

.ml-auto {
  margin-left: 8px; 
}
</style>


