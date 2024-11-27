<template>
    <h1>Update roles for {{ data?.userName }}</h1>
    <a-form :model="formState">
        <a-form-item label="Roles">
            <a-checkbox-group v-model:value="formState.roles">
                <a-checkbox value="admin" name="type">Admin</a-checkbox>
                <a-checkbox value="user" name="type">User</a-checkbox>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="handleUpdate">Create</a-button>
            <a-button style="margin-left: 10px">Cancel</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
definePageMeta({
    middleware: "auth",
    permission: "editUser",
});

import type { User } from "~/plugins/auth";

const route = useRoute();

const { data, error } = await useFetch<User>("/api/users", {
    query: { id: route.params.id },
});

const formState = reactive({
    id: route.params.id,
    roles: data.value?.roles,
});

const handleUpdate = async () => {
    await $fetch("/api/users", {
        method: "PUT",
        body: formState,
    });

    navigateTo("/auth/user-management");
};
</script>

<style lang="css" scoped>
.ant-col-offset-4 {
    margin-left: 0;
}
</style>
