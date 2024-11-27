<template>
    <a-table :columns="columns" :data-source="data ?? []">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    <smile-outlined />
                    Name
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.userName }}
                </a>
            </template>
            <template v-else-if="column.key === 'roles'">
                <span>
                    <a-tag
                        v-for="role in record.roles"
                        :key="role"
                        :color="
                            role === 'admin'
                                ? 'volcano'
                                : role.length > 5
                                ? 'geekblue'
                                : 'green'
                        "
                    >
                        {{ role.toUpperCase() }}
                    </a-tag>
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <span>
                    <nuxt-link :to="`/auth/edit-${record.id}`"
                        >Update</nuxt-link
                    >
                </span>
            </template>
        </template>
    </a-table>
</template>
<script lang="ts" setup>
import type { User } from "~/plugins/auth";

definePageMeta({
    middleware: "auth",
    permission: "viewUser",
});

const { data, error } = useFetch<User[]>("/api/users");

const columns = [
    {
        name: "User Name",
        dataIndex: "userName",
        key: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "age",
    },
    {
        title: "Role",
        dataIndex: "roles",
        key: "roles",
    },
    {
        title: "Action",
        key: "action",
    },
];
</script>
