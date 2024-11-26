export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useNuxtApp().$auth;

    if (!auth.value.isAuthenticated) {
        return navigateTo("/login");
    }
});
