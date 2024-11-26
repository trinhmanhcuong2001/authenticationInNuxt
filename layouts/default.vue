<template>
    <div>
        <!-- <nav>
            <NuxtLink to="/">Home</NuxtLink> |
            <NuxtLink to="/protected">Protected</NuxtLink> |
            <NuxtLink to="/login">Login</NuxtLink>
        </nav> -->
        <slot />
    </div>
</template>

<style>
nav {
    padding: 10px;
    background: #f4f4f4;
    border-bottom: 1px solid #ddd;
}
</style>
