<script setup lang="ts">
import type { User } from "~/plugins/auth";
const login = useNuxtApp().$login;

const userCredentials = reactive<User>({
    id: Date.now(),
    name: "",
    role: "user", 
});

const handleLogin = () => {
    login(userCredentials);
    navigateTo("/");
};
</script>

<template>
    <div>
        <h1>Đăng Nhập</h1>
        <input v-model="userCredentials.name" placeholder="Tên người dùng" />
        <select v-model="userCredentials.role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
        <button @click="handleLogin">Đăng Nhập</button>
    </div>
</template>
