<template>
    <div>
        <header>
            <nav>
                <NuxtLink class="link" to="/">Trang Chủ</NuxtLink>
                <NuxtLink class="link" to="/posts">Quản Lý Bài Viết</NuxtLink>
                <NuxtLink class="link" to="/login">Đăng Nhập</NuxtLink>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>© 2024 RBAC System</p>
        </footer>
    </div>
</template>
<style scoped>
.link {
    margin: 5px 10px;
}
</style>
