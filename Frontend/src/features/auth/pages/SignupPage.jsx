import SignupForm from "../components/SignupForm";

function SignupPage() {
  return (
    <div className="h-full bg-shb-navy text-slate-20 font-sans antialiased overflow-x-hidden">
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* <!-- BEGIN: LeftSide_Mission --> */}
        <section
          className="w-full md:w-1/2 flex flex-col justify-between p-7 pb-0 md:p-10 md:pb-0 lg:p-14 lg:pb-0 bg-shb-navy relative overflow-hidden"
          data-purpose="mission-content"
        >
          {/* <!-- Background subtle gradient element --> */}
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-900/25 rounded-full blur-[120px]"></div>
          <div className="relative z-10">
            {/* <!-- Circular Exchange Badge --> */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-shb-border bg-shb-card/50 backdrop-blur-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Circular Economy Network
              </span>
            </div>
            {/* <!-- Heading Section --> */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Join the local <br />
                <span className="text-blue-500 italic">movement.</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                Every item has a story. Give yours a second one by joining our
                community of conscious traders and collectors.
              </p>
            </div>
            {/* <!-- Key Value Props --> */}
            <div className="grid grid-cols-1 gap-3 mt-5 max-w-md">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-shb-border hover:bg-shb-card/30 transition-all">
                <div className="bg-blue-600/70 p-2.5 rounded-lg text-shb-accent">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Reduce Waste</h3>
                  <p className="text-sm text-slate-400">
                    Keep high-quality items out of landfills and in circulation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-shb-border hover:bg-shb-card/30 transition-all">
                <div className="bg-blue-600/70 p-2.5 rounded-lg text-shb-accent">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 4.833 1.633 9.381 4.382 13.044l4.236 5.116 4.236-5.116A11.954 11.954 0 0019.618 6.984z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Secure Exchange</h3>
                  <p className="text-sm text-slate-400">
                    Peer-reviewed trading with built-in fraud protection
                    protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-shb-border hover:bg-shb-card/30 transition-all">
                <div className="bg-blue-600/70 p-2.5 rounded-lg text-shb-accent">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Local Community</h3>
                  <p className="text-sm text-slate-400">
                    Connecting neighbors through sustainable local commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END: LeftSide_Mission --> */}
        {/* <!-- BEGIN: RightSide_SignupForm --> */}
        <section
          className="w-full md:w-1/2 flex items-center justify-center p-5 pb-0 md:p-10 md:pb-0 lg:p-14 lg:pb-0 bg-shb-surface"
          data-purpose="registration-form"
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-shb-primary mb-2">
                Create your account
              </h2>   
              <p className="text-slate-400 text-sm">
                Fill in the details below to join the exchange.
              </p>
            </div>
            {/* <!-- Signup Form --> */}
            <SignupForm />
            {/* <!-- Divider --> */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-shb-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-shb-surface px-4 text-slate-300 tracking-widest font-medium">
                  Or join with
                </span>
              </div>
            </div>
            {/* <!-- Social Logins --> */}
            <div className="grid text-white grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-shb-border bg-shb-card hover:bg-slate-800 transition-all text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M12 5.04c1.9 0 3.6.65 4.93 1.9l3.7-3.7A11.97 11.97 0 0012 0C7.3 0 3.2 2.7 1.2 6.6l4.3 3.3c1-2.9 3.7-4.9 6.5-4.9z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M23.5 12.2c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.7-2.3 3.5l3.6 2.8c2.1-2 3.7-5 3.7-8.6z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M5.5 14.5c-.2-.6-.4-1.3-.4-2s.2-1.4.4-2L1.2 7.2A11.9 11.9 0 000 12c0 1.8.4 3.5 1.2 4.8l4.3-3.3z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 24c3.2 0 6-1 8-2.8l-3.6-2.8c-1.1.8-2.6 1.3-4.4 1.3-3.1 0-5.8-2.1-6.7-5l-4.3 3.4C3.2 21.4 7.3 24 12 24z"
                    fill="#34A853"
                  ></path>
                </svg>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-shb-border bg-shb-card hover:bg-slate-800 transition-all text-sm font-medium">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.96.95-2.05 1.9-3.3 1.9-1.25 0-1.62-.77-3.1-.77-1.48 0-1.9.75-3.1.77-1.2.02-2.45-1.05-3.42-2.42-2-2.82-3.53-7.95-1.48-11.5 1.02-1.77 2.85-2.9 4.83-2.93 1.52-.03 2.95 1.02 3.88 1.02s2.72-1.27 4.55-1.08c.77.03 2.93.3 4.32 2.33-.12.07-2.58 1.5-2.55 4.5.03 3.6 3.12 4.82 3.15 4.83-.02.08-.5 1.7-1.65 3.35zM12.03 5.07c.85-1.02 1.4-2.45 1.25-3.87-1.22.05-2.7 0.82-3.58 1.85-.78.9-1.47 2.37-1.28 3.75 1.35.1 2.75-.72 3.6-1.73z"></path>
                </svg>
                <span>Apple</span>
              </button>
            </div>
            {/* <!-- Sign In Link --> */}
            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <a
                className="text-blue-500 font-semibold hover:underline"
                href="/login"
              >
                Login
              </a>
            </p>
          </div>
        </section>
        {/* <!-- END: RightSide_SignupForm --> */}
      </main>
    </div>
  );
}

export default SignupPage;
