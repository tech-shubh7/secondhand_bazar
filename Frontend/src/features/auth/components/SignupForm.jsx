import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      await register(formData);
      navigate("/login");
    } catch (err) {
      setError(
        err?.response?.data?.error || "Signup failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* <!-- Full Name --> */}
      <div className="space-y-1.5">
        <label
          className="text-xs font-semibold text-slate-400 ml-1"
          htmlFor="full-name"
        >
          Full Name
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </span>
          <input
            className="block w-full pl-10 pr-4 py-3 bg-shb-card border border-shb-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-shb-primary/50 focus:border-shb-primary transition-all text-sm"
            id="full-name"
            name="name"
            placeholder="John Doe"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <!-- Contact Row: Email & Phone --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            className="text-xs font-semibold text-slate-400 ml-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="block w-full px-4 py-3 bg-shb-card border border-shb-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-shb-primary/50 focus:border-shb-primary transition-all text-sm"
            id="email"
            name="email"
            placeholder="name@email.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1.5">
          <label
            className="text-xs font-semibold text-slate-400 ml-1"
            htmlFor="phone"
          >
            Phone Number (optional)
          </label>
          <input
            className="block w-full px-4 py-3 bg-shb-card border border-shb-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-shb-primary/50 focus:border-shb-primary transition-all text-sm"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <!-- Password --> */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center px-1">
          <label
            className="text-xs font-semibold text-slate-400"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </span>
          <input
            className="block w-full pl-10 pr-10 py-3 bg-shb-card border border-shb-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-shb-primary/50 focus:border-shb-primary transition-all text-sm"
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-shb-accent"
            type="button"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
      {/* <!-- Submit Button --> */}
      <button
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all btn-glow text-base"
        type="submit"
      >
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}

export default SignupForm;
