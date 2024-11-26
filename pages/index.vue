<script lang="ts" setup>
definePageMeta({
    middleware: "auth",
});
const auth = useNuxtApp().$auth;

// console.log(auth.value.isAuthen);
</script>

<template>
    <div class="">
        <h1>Xin chao</h1>
    </div>
</template>
