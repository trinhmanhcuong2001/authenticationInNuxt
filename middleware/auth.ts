export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useNuxtApp().$auth;

    if (!auth.value.isAuthen) {
        return navigateTo("/login");
    }
});
