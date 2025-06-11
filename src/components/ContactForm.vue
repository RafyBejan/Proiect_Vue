<template>
  <section class="py-8 px-2 bg-gray-100 min-h-screen flex flex-col items-center">
    <h2 class="text-2xl font-bold mb-6 text-center">Contact Us</h2>
    <form @submit.prevent="submitForm" class="w-full max-w-md bg-white p-6 rounded shadow flex flex-col gap-4">
      <div>
        <label for="name" class="block mb-1 text-gray-700">Name</label>
        <input type="text" id="name" v-model="formData.name" required class="input input-bordered w-full" />
      </div>
      <div>
        <label for="email" class="block mb-1 text-gray-700">Email</label>
        <input type="email" id="email" v-model="formData.email" required class="input input-bordered w-full" />
      </div>
      <div>
        <label for="message" class="block mb-1 text-gray-700">Message</label>
        <textarea id="message" v-model="formData.message" required class="input input-bordered w-full"></textarea>
      </div>
      <button type="submit" class="bg-primary text-white py-2 rounded hover:bg-pink-600 transition">Send Message</button>
    </form>
  </section>
</template>
  
  <script>
  export default {
    name: "Contact",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Thank you, ${this.formData.name}. Your message has been sent!`);
        this.formData = { name: "", email: "", message: "" };
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 2rem;
    background-color: #eef2f7;
  }
  .contact h2 {
    margin-bottom: 1rem;
    color: #333;
  }
  .contact .form-group {
    margin-bottom: 1rem;
  }
  .contact label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }
  .contact input,
  .contact textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .contact button {
    background-color: #ff4c4c;
    color: white;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .contact button:hover {
    background-color: #e63939;
  }
  </style>
  