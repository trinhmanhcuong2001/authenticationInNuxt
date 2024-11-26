<script setup lang="ts">
const login = useNuxtApp().$login;

const userCredentials = reactive({
    id: 1,
    name: "",
    role: "viewer", // Vai trò mặc định là viewer
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
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
        </select>
        <button @click="handleLogin">Đăng Nhập</button>
    </div>
</template>
