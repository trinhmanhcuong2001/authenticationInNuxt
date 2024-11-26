export interface User {
    id: number;
    userName: string;
    email: string;
    password: string;
    role: string;
}

export interface AuthState {
    isAuthen: boolean;
    user: User | null;
}

export default defineNuxtPlugin(() => {
    const auth = useState<AuthState>("auth", () => ({
        isAuthen: false,
        user: null,
    }));

    const login = (user: User) => {
        auth.value.isAuthen = true;
        auth.value.user = user;
    };

    const logout = () => {
        auth.value.isAuthen = false;
        auth.value.user = null;
    };

    return {
        provide: {
            auth,
            login,
            logout
        },
    };
});
