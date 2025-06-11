<template>
  <section class="py-8 px-2 bg-gray-100 min-h-screen flex flex-col items-center">
    <h2 class="text-2xl font-bold mb-6 text-center">Login / Register</h2>
    <div class="flex space-x-2 mb-6">
      <button
        @click="activeTab = 'login'"
        :class="['px-4 py-2 rounded', activeTab === 'login' ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700']"
      >Login</button>
      <button
        @click="activeTab = 'register'"
        :class="['px-4 py-2 rounded', activeTab === 'register' ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700']"
      >Register</button>
    </div>
    <div v-if="activeTab === 'login'" class="w-full max-w-xs bg-white p-6 rounded shadow">
      <h3 class="text-lg font-semibold mb-4">Login</h3>
      <form @submit.prevent="handleLogin" class="flex flex-col gap-3">
        <input type="email" placeholder="Email" v-model="loginData.email" required class="input input-bordered" />
        <input type="password" placeholder="Password" v-model="loginData.password" required class="input input-bordered" />
        <button type="submit" class="bg-primary text-white py-2 rounded hover:bg-pink-600 transition">Login</button>
      </form>
    </div>
    <div v-if="activeTab === 'register'" class="w-full max-w-xs bg-white p-6 rounded shadow">
      <h3 class="text-lg font-semibold mb-4">Register</h3>
      <form @submit.prevent="handleRegister" class="flex flex-col gap-3">
        <input type="text" placeholder="Full Name" v-model="registerData.name" required class="input input-bordered" />
        <input type="email" placeholder="Email" v-model="registerData.email" required class="input input-bordered" />
        <input type="password" placeholder="Password" v-model="registerData.password" required class="input input-bordered" />
        <button type="submit" class="bg-primary text-white py-2 rounded hover:bg-pink-600 transition">Register</button>
      </form>
    </div>
  </section>
</template>
  
  <script>
  import { useUserStore } from '../stores/user';


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
  async handleLogin() {
    const userStore = useUserStore();
    try {
      await userStore.login(this.loginData.email, this.loginData.password);
      alert(`Bun venit, ${userStore.user.name}!`);
      this.$router.push("/shop");
    } catch (err) {
      alert("Email sau parolă greșită!");
    }
  },
  async handleRegister() {
    const userStore = useUserStore();
    try {
      await userStore.register(this.registerData.name, this.registerData.email, this.registerData.password);
      alert(`Cont creat pentru ${res.data.name}!`);
      this.$router.push("/shop");
    } catch (err) {
      alert("Eroare la înregistrare!");
    }
  }, 
}
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
  