export default defineNuxtPlugin(() => {
    const auth = useState("auth", () => ({
        isAuthenticated: false,
        user: null as { name: string; email: string } | null,
    }));

    const login = (user: { name: string; email: string }) => {
        auth.value.isAuthenticated = true;
        auth.value.user = user;
    };

    const logout = () => {
        auth.value.isAuthenticated = false;
        auth.value.user = null;
    };

    return {
        provide: {
            auth,
            login,
            logout,
        },
    };
});
