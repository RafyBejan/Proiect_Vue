<!-- ProductCrudForm.vue -->
<template>
  <div class="mb-8 p-4 bg-white rounded shadow">
    <h3 class="text-lg font-bold mb-4">Adaugă sau editează produs</h3>
    <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-2 mb-4">
      <input v-model="form.name" type="text" placeholder="Nume" required class="border px-2 py-1 rounded" />
      <input v-model="form.price" type="number" placeholder="Preț" required class="border px-2 py-1 rounded" />
      <button type="submit" class="bg-primary text-white px-4 py-1 rounded">
        {{ editMode ? "Actualizează" : "Adaugă" }}
      </button>
      <button v-if="editMode" type="button" @click="resetForm" class="bg-gray-300 text-black px-4 py-1 rounded">
        Anulează
      </button>
    </form>
    <div>
      <h4 class="font-semibold mb-2">Produse existente:</h4>
      <ul>
        <li v-for="prod in products" :key="prod.id" class="flex items-center gap-2 mb-1">
          <span>{{ prod.id }}. {{ prod.name }} - {{ prod.price }} RON</span>
          <button @click="editProduct(prod)" class="text-blue-600 underline text-sm">Editează</button>
          <button @click="deleteProduct(prod.id)" class="text-red-600 underline text-sm">Șterge</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();

const form = ref({ id: "", name: "", price: "" });
const editMode = ref(false);

const products = computed(() => cartStore.products);

function handleSubmit() {
  if (editMode.value) {
    cartStore.updateProduct({ ...form.value, id: Number(form.value.id), price: Number(form.value.price) });
  } else {
    cartStore.addProduct({ name: form.value.name, price: Number(form.value.price) });
  }
  resetForm();
}

function editProduct(prod) {
  form.value = { ...prod };
  editMode.value = true;
}

function deleteProduct(id) {
  cartStore.deleteProduct(id);
  if (editMode.value && form.value.id === id) resetForm();
}

function resetForm() {
  form.value = { id: "", name: "", price: "" };
  editMode.value = false;
}
</script>