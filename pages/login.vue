<script lang="ts" setup>
const login = useNuxtApp().$login;

const infoLogin = reactive({
    email: "",
    password: "",
});

const handleLogin = () => {
    login(infoLogin);
};
</script>

<template>
    <div class="">
        <h2>Đăng nhập</h2>
        <input type="text" placeholder="Email" v-model="infoLogin.email" />
        <input
            type="password"
            placeholder="Password"
            v-model="infoLogin.password"
        />

        <button @click="handleLogin">Đăng nhập</button>
    </div>
</template>

<style lang="scss" scoped></style>
