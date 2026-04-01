import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="font-display bg-background-dark text-slate-100 min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Brand Section */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-slate-950 items-center justify-center p-12 lg:p-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/30 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
            <span className="size-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">
              Circular Economy Network
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Give every item a{" "}
            <span className="text-blue-500 italic">second story.</span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            Join the movement of circular exchange. Our professional marketplace
            connects conscious creators and collectors to build a sustainable
            future together. Reduce waste, save money, and give pre-loved items
            a new home.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white">50k+</div>
              <div className="text-sm text-slate-500">Items Rehomed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">12.4t</div>
              <div className="text-sm text-slate-500">CO2 Saved</div>
            </div>
          </div>
        </div>

        {/* Community Trust Section */}
        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center text-xs text-slate-600 font-medium">
          <span>TRUSTED BY 2,000+ BUSINESSES</span>
          <div className="flex -space-x-2">
            <div className="size-8 rounded-full border-2 border-slate-900 bg-slate-700"></div>
            <div className="size-8 rounded-full border-2 border-slate-900 bg-slate-600"></div>
            <div className="size-8 rounded-full border-2 border-slate-900 bg-slate-500"></div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 md:w-1/2 flex items-center justify-center bg-slate-900">
        <div className="w-full max-w-md flex flex-col gap-8">
          {/* Mobile Logo & Header */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="size-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <svg
                className="size-7"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Welcome back
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Please enter your details to login
              </p>
            </div>
          </div>

          {/* Form Component */}
          <LoginForm />

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-500">
            New to the community?{" "}
            <a
              className="font-bold text-blue-500 hover:underline underline-offset-4 decoration-2"
              href="/signup"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
