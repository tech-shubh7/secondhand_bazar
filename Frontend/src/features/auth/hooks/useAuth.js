import { useAuthStore } from "../store/authStore"
import * as authApi from "../services/auth.api"

export const useAuth = () => {
  const { setUser, logout, setLoading } = useAuthStore()

  const login = async (data) => {
    try {
      setLoading(true)
      const res = await authApi.loginUser(data)
      setUser(res.data.user)
    } finally {
      setLoading(false)
    }
  }

  const register = async (data) => {
    return await authApi.registerUser(data)
  }

  const logoutUser = async () => {
    await authApi.logoutUser()
    logout()
  }

  return { login, register, logoutUser }
}