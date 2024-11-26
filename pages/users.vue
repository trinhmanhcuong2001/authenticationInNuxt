<script setup>
definePageMeta({
  middleware: 'auth',
  requiresAdmin: true,
});
const auth = useNuxtApp().$auth;
const users = ref([
    { id: 1, name: "Admin", role: "admin" },
    { id: 2, name: "User", role: "user" },
]);
</script>

<template>
    <div>
        <h1>Quản Lý Người Dùng</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Vai Trò</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.role }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
