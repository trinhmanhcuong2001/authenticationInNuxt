<template>
    <div>
        <header>
            <nav>
                <NuxtLink class="link" to="/">Trang Chủ</NuxtLink>
                <NuxtLink class="link" to="/users">Quản Lý Người Dùng</NuxtLink>
                <NuxtLink class="link" to="/login">Đăng Nhập</NuxtLink>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>© 2024 Hệ thống phân quyền</p>
        </footer>
    </div>
</template>
<style scoped>
.link {
    margin: 5px 10px;
}
</style>
