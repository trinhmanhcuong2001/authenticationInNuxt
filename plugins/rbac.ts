export interface Permission {
    name: string;
}

export interface Role {
    name: string;
    permissions: string[];
}

export interface User {
    id: number;
    name: string;
    role: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

export default defineNuxtPlugin(() => {
    const roles: Role[] = [
        { name: "admin", permissions: ["createPost", "editPost", "viewPost"] },
        { name: "editor", permissions: ["editPost", "viewPost"] },
        { name: "viewer", permissions: ["viewPost"] },
    ];

    const auth = useState<AuthState>("auth", () => ({
        isAuthenticated: false,
        user: null,
    }));

    const login = (user: User) => {
        auth.value.isAuthenticated = true;
        auth.value.user = user;
    };

    const logout = () => {
        auth.value.isAuthenticated = false;
        auth.value.user = null;
    };

    const hasPermission = (permission: string): boolean => {
        if (!auth.value.isAuthenticated || !auth.value.user) return false;
        const role = roles.find((r) => r.name === auth.value.user!.role);
        return role ? role.permissions.includes(permission) : false;
    };

    return {
        provide: {
            auth,
            login,
            logout,
            hasPermission,
        },
    };
});
