
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useAuthStore = create(
    devtools((set) => ({
        user: null,
        isAuthenticated: false,
        isLoading: true,

        setUser: (user) => set({ user, isAuthenticated: Boolean(user) }),
        logout: () => set({ user: null, isAuthenticated: false, isLoading: false }),
        setLoading: (value) => set({ isLoading: value })
    }), { name: 'AuthStore' })
)