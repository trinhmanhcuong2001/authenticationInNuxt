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

    const login = async (user: any) => {
        const data = await $fetch<User[]>("/api/auth", {
            method: "POST",
        });

        const userI = data.find(
            (u) => u.email === user.email && u.password === user.password
        );

        if (userI) {
            auth.value.isAuthen = true;
            auth.value.user = userI;

            alert("Đăng nhập thành công");
            return navigateTo("/");
        }

        alert("Thông tin đăng nhập không chính xác");
    };

    return {
        provide: {
            auth,
            login,
        },
    };
});
