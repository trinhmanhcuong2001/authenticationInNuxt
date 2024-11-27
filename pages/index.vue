<script lang="ts" setup>
definePageMeta({
    middleware: "auth",
});
const auth = useNuxtApp().$auth;
</script>

<template>
    <div class="">
        <h1>Xin chao</h1>
    </div>
</template>
