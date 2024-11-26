<script setup>
const auth = useNuxtApp().$auth;
const logout = useNuxtApp().$logout;

const handleLogout = () => {
    logout();
    navigateTo("/login");
};
</script>

<template>
    <div>
        <h1>Trang Chủ</h1>
        <p>Chào mừng, {{ auth.user?.name || "Khách" }}</p>
        <button v-if="auth.isAuthenticated" @click="handleLogout">
            Đăng Xuất
        </button>
    </div>
</template>
