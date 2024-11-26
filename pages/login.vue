<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label>Email</label>
                <input v-model="email" type="email" required />
            </div>
            <div>
                <label>Password</label>
                <input v-model="password" type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");

const { $login } = useNuxtApp();

const handleLogin = () => {
    if (email.value === "user@example.com" && password.value === "password") {
        $login({ name: "John Doe", email: email.value });
        navigateTo("/");
    } else {
        alert("Invalid credentials");
    }
};
</script>

<style>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
</style>
