export default defineNuxtPlugin(() => {
    const auth = useState("auth", () => ({
        isAuthenticated: false,
        user:  null,
    }));

    const login = (user: any) => {
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
