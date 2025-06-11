import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
    cart: [], 
  }),
  actions: {
    
    async fetchProducts({ category = "", sort = ""} = {}) { 
        try {
          let url = "http://localhost:3000/api/view";
          const params = [];
          if(category) params.push(`category=${encodeURIComponent(category)}`);
          if(sort) params.push(`sort=${encodeURIComponent(sort)}`);
          if(params.length) url += "?" + params.join("&");

          const response = await axios.get(url);
          this.products = response.data;
        } catch (error) {
          console.error("Eroare la fetch-ul produselor:", error);
        }
      },

  
    async addProduct(product) {
    try {
      await axios.post("http://localhost:3000/api/products", product, {
        headers: { "Content-Type": "application/json" }
      });
      await this.fetchProducts();
    } catch (error) {
      console.error("Eroare la adăugarea produsului:", error);
    }
  },
    
  async deleteProduct(productId) {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`);
      await this.fetchProducts();
    } catch (error) {
      console.error("Eroare la ștergerea produsului:", error);
    }
  },
   
    async updateProduct(product) {
    try {
      await axios.put(
        `http://localhost:3000/api/products/${product.id}`,
        { name: product.name, price: product.price },
        { headers: { "Content-Type": "application/json" } }
      );
      await this.fetchProducts();
    } catch (error) {
      console.error("Eroare la actualizarea produsului:", error);
    }
  },

    async clearCart() {
      this.cart = [];
      try {
        await axios.post("http://localhost:3000/api/cart/clear");
      } catch (error) {
        console.error("Eroare la golirea coșului:", error);
      }
    },
  },
});