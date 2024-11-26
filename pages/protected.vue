<template>
    <div>
        <h1>Protected Page</h1>
        <p v-if="$auth.isAuthenticated">
            Welcome, {{ $auth.user?.name }}!
        </p>
        <p v-else>You are not authenticated.</p>
        <button @click="$logout">Logout</button>
    </div>
</template>

<script setup lang="ts">
const { $auth, $logout } = useNuxtApp();

definePageMeta({
    middleware: "auth",
});
</script>
