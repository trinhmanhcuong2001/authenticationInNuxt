export interface User {
    id: number;
    name: string;
    role: 'admin' | 'user';
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
  }
  
  export default defineNuxtPlugin(() => {
    const auth = useState<AuthState>('auth', () => ({
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
  
    return {
      provide: {
        auth,
        login,
        logout,
      },
    };
  });