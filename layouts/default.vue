<template>
    <!-- <client-only> -->
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <a-menu theme="dark" mode="inline">
                <a-menu-item key="1">
                    <nuxt-link to="/">
                        <pie-chart-outlined />
                    <span>Home</span>
                    </nuxt-link>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>User</span>
                        </span>
                    </template>
                    <a-menu-item key="3">
                        <nuxt-link to="/auth/user-management"
                            >List User</nuxt-link
                        >
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9" @click="handleLogout">
                    <account-book-outlined />
                    <span>Logout</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0" />
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0"> </a-breadcrumb>
                <div
                    :style="{
                        padding: '24px',
                        background: '#fff',
                        minHeight: '360px',
                    }"
                >
                    <slot />
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
    <!-- </client-only> -->
</template>
<script lang="ts" setup>
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
const logout = useNuxtApp().$logout;

const handleLogout = () => {
    logout();
    navigateTo("/login");
};
</script>
<style scoped>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
}
</style>
