<script lang="ts" setup>
const auth = useNuxtApp().$auth;
</script>

<template>
    <div class="">
        <header>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li><nuxt-link to="/posts/create">Create Post</nuxt-link></li>
                <li><nuxt-link to="/posts">List Post</nuxt-link></li>
                <li><nuxt-link to="/posts/edit-1">Edit</nuxt-link></li>
            </ul>
            <p>{{ auth.user?.userName }}</p>
        </header>
        <slot />
    </div>
</template>

<style lang="css" scoped>
header {
    display: flex;
    justify-content: space-between;
}

ul {
    display: flex;
}
li {
    list-style: none;
    padding: 5px 10px;
    margin: 0 10px;
}
</style>
