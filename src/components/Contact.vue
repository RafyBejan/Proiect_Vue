<template>
    <section class="contact">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
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
  