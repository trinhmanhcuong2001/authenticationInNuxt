export default defineNuxtRouteMiddleware((to) => {
    const auth = useNuxtApp().$auth;
    const hasPermission = useNuxtApp().$hasPermission;

    if (!auth.value.isAuthenticated) {
        alert("Bạn cần đăng nhập!");
        return navigateTo("/login");
    }

    const requiredPermission = to.meta.permission as string | undefined;
    if (requiredPermission && !hasPermission(requiredPermission)) {
        alert("Bạn không có quyền truy cập!");
        return navigateTo("/");
    }
});
