export interface User {
    id: number;
    userName: string;
    email: string;
    password: string;
    roles: string[];
}

export interface AuthState {
    isAuthen: boolean;
    user: User | null;
}

export default defineNuxtPlugin(async () => {
    const permissionData = await $fetch("/api/permissions");

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

    const hasPermission = (permission: string): boolean => {
        if (!auth.value.isAuthen || !auth.value.user) return false;
        const roles = auth.value.user.roles;
        // roles.forEach((r) => {
        //     const ro = permissionData?.find((rol) => rol.name === r.name);
        //     if (ro && ro.permissions.includes(permission)) return true;
        // });
        // return false;
        return roles.some((r) => {
            const ro = permissionData?.find((rol) => rol.name === r);
            return ro && ro.permissions.includes(permission);
        });
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
