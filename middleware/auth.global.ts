export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useNuxtApp().$auth;

    const routeAdmin = ["/posts", "/posts/create", "/posts/edit-:id"];

    if (auth.value.isAuthen) {
        if (routeAdmin.includes(to.path) && auth.value.user?.role !== "admin") {
            if (import.meta.client) {
                alert("Bạn không có quyền vào trang này");
            }
            return navigateTo("/");
        }
        if (
            to.path === "/posts/edit-:id" &&
            auth.value.user?.role !== "editor"
        ) {
            if (import.meta.client) {
                alert("Bạn không có quyền vào trang này");
            }
            return navigateTo("/");
        }
    }

    if (!auth.value.isAuthen && to.path !== "/login") {
        if (import.meta.client) {
            alert("Bạn cần đăng nhập");
        }
        return navigateTo("/login");
    }
});
