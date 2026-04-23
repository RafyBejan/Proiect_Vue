import { defineStore } from "pinia";
import { api } from "../api";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
    cart: [],
  }),
  actions: {
    async fetchProducts({ category = "", sort = "" } = {}) {
      try {
        const params = {};
        if (category) params.category = category;
        if (sort) params.sort = sort;

        const response = await api.get("/api/view", { params });
        this.products = response.data;
      } catch (error) {
        console.error("Eroare la fetch-ul produselor:", error);
      }
    },

    async addProduct(product) {
      try {
        await api.post("/api/products", product);
        await this.fetchProducts();
      } catch (error) {
        console.error("Eroare la adăugarea produsului:", error);
      }
    },

    async deleteProduct(productId) {
      try {
        await api.delete(`/api/products/${productId}`);
        await this.fetchProducts();
      } catch (error) {
        console.error("Eroare la ștergerea produsului:", error);
      }
    },

    async updateProduct(product) {
      try {
        await api.put(`/api/products/${product.id}`, {
          name: product.name,
          price: product.price,
        });
        await this.fetchProducts();
      } catch (error) {
        console.error("Eroare la actualizarea produsului:", error);
      }
    },

    async clearCart() {
      this.cart = [];
      try {
        await api.post("/api/cart/clear");
      } catch (error) {
        console.error("Eroare la golirea coșului:", error);
      }
    },
  },
});
