import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-dark p-8 rounded-xl border border-border-dark shadow-2xl">
      {error && (
        <div className="p-3 mb-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-300" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-[20px]">
              mail
            </span>
            <input
              className="w-full pl-11 pr-4 py-3 border border-border-dark rounded-lg text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-600"
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <label
              className="text-sm font-medium text-slate-300"
              htmlFor="password"
            >
              Password
            </label>
            <a
              className="text-xs font-semibold text-primary hover:text-blue-500 transition-colors"
              href="#"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-[20px]">
              lock
            </span>
            <input
              className="w-full pl-11 pr-11 py-3 border border-border-dark rounded-lg text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-600"
              id="password"
              name="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          className="w-full py-3.5 bg-blue-500 hover:bg-blue-700 disabled:bg-blue-400/50 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-300/25 mt-2 active:scale-[0.98]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border border-dark"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className=" px-3 text-slate-3 font-medium">Or join with</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
          <button
            className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-background-dark border border-border-dark rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium text-slate-300"
            type="button"
          >
            <svg className="size-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            Google
          </button>
          <button
            className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-background-dark border border-border-dark rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium text-slate-300"
            type="button"
          >
            <svg className="size-5 fill-current text-white" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.96.95-2.04 1.44-3.23 1.44-1.23 0-2.34-.45-3.34-1.44-1-.96-1.5-2.08-1.5-3.34s.5-2.38 1.5-3.34c1-.95 2.11-1.44 3.34-1.44 1.19 0 2.27.49 3.23 1.44.96.96 1.44 2.08 1.44 3.34s-.48 2.38-1.44 3.34zM12.03 2c-.67 0-1.21.54-1.21 1.21s.54 1.21 1.21 1.21 1.21-.54 1.21-1.21-.54-1.21-1.21-1.21z"></path>
              <path d="M12.03 7.25c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
              <path d="M17.5 12.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"></path>
            </svg>
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
