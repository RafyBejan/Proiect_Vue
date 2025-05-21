<template>
    <section class="login-register">
      <h2>Login / Register</h2>
      <div class="tabs">
        <button @click="activeTab = 'login'" :class="{ active: activeTab === 'login' }">Login</button>
        <button @click="activeTab = 'register'" :class="{ active: activeTab === 'register' }">Register</button>
      </div>
      <div v-if="activeTab === 'login'" class="form">
        <h3>Login</h3>
        <form @submit.prevent="handleLogin">
          <input type="email" placeholder="Email" v-model="loginData.email" required />
          <input type="password" placeholder="Password" v-model="loginData.password" required />
          <button type="submit">Login</button>
        </form>
      </div>
      <div v-if="activeTab === 'register'" class="form">
        <h3>Register</h3>
        <form @submit.prevent="handleRegister">
          <input type="text" placeholder="Full Name" v-model="registerData.name" required />
          <input type="email" placeholder="Email" v-model="registerData.email" required />
          <input type="password" placeholder="Password" v-model="registerData.password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "LoginRegister",
    data() {
      return {
        activeTab: "login",
        loginData: {
          email: "",
          password: "",
        },
        registerData: {
          name: "",
          email: "",
          password: "",
        },
      };
    },
    methods: {
      handleLogin() {
        alert(`Welcome back, ${this.loginData.email}!`);
      },
      handleRegister() {
        alert(`Thanks for registering, ${this.registerData.name}!`);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-register {
    padding: 2rem;
    background-color: #f5f5f5;
  }
  .login-register h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .tabs button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    background-color: #ddd;
    color: #333;
  }
  .tabs button.active {
    background-color: #ff4c4c;
    color: white;
  }
  .form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .form button {
    width: 100%;
    padding: 0.7rem;
    background-color: #ff4c4c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .form button:hover {
    background-color: #e63939;
  }
  </style>
  