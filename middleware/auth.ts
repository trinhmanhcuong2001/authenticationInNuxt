export default defineNuxtRouteMiddleware((to) => {
    const auth = useNuxtApp().$auth;

    if (!auth.value.isAuthenticated) {
        if (import.meta.client) {
            alert("Bạn cần đăng nhập!");
            return navigateTo("/login");
        }
    }

    if (to.meta.requiresAdmin && auth.value.user?.role !== "admin") {
        if (import.meta.client) {
            alert("Bạn không có quyền truy cập!");
            return navigateTo("/");
        }
    }
});
