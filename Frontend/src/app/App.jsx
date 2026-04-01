import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useEffect } from "react";
import { useAuthStore } from "../features/auth/store/authStore";
import { getCurrentUser } from "../features/auth/services/auth.api";

function App() {
  const { setUser, logout, setLoading } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await getCurrentUser();
        setUser(res.data.user ?? null);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setUser, logout, setLoading]);

  return <RouterProvider router={router} />;
}

export default App;
