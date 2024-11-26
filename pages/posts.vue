<script setup lang="ts">
definePageMeta({
    middleware: "permission",
    permission: "viewPost", // Yêu cầu quyền xem bài viết
});

const hasPermission = useNuxtApp().$hasPermission;
</script>

<template>
    <div>
        <h1>Quản Lý Bài Viết</h1>
        <div v-if="hasPermission('createPost')">
            <button>Tạo Bài Viết</button>
        </div>
        <div v-if="hasPermission('editPost')">
            <button>Chỉnh Sửa Bài Viết</button>
        </div>
        <p v-if="hasPermission('viewPost')">Bạn có thể xem bài viết!</p>
    </div>
</template>
