import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthStore } from "../../auth/store/authStore";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();
  const forceLogout = useAuthStore((state) => state.logout);

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      await logoutUser();
    } catch {
      // Keep UX safe even if backend logout fails.
      forceLogout();
    } finally {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div
      className="font-body bg-slate-900 antialiased"
      style={{ color: "#f8fafc" }}
    >
      {/* <!-- TopNavBar Component --> */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-7xl mx-auto">
          {/* <!-- Brand Logo --> */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl group-hover:rotate-180 transition-transform duration-500">
                  sync
                </span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-headline">
                SecondHand <span className="text-primary">Bazar</span>
              </span>
            </div>
            {/* <!-- Navigation Links --> */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-semibold transition-colors cursor-pointer text-primary relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-sm font-semibold transition-colors cursor-pointer text-slate-400 hover:text-white"
                href="#"
              >
                Add Item
              </a>
              <a
                className="text-sm font-semibold transition-colors cursor-pointer text-slate-400 hover:text-white"
                href="#"
              >
                My Items
              </a>
              <a
                className="text-sm font-semibold transition-colors cursor-pointer text-slate-400 hover:text-white"
                href="#"
              >
                Browse
              </a>
              <a
                className="text-sm font-semibold transition-colors cursor-pointer text-slate-400 hover:text-white"
                href="#"
              >
                Requests
              </a>
              <a
                className="text-sm font-semibold transition-colors cursor-pointer text-slate-400 hover:text-white"
                href="#"
              >
                Profile
              </a>
            </nav>
          </div>
          {/* <!-- Trailing Actions --> */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700/50 focus-within:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-slate-400 text-lg mr-3">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-40 text-slate-200 placeholder-slate-500"
                placeholder="Search..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">
                notifications
              </button>
              <button className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">
                settings
              </button>
              <div className="relative group">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-slate-700 hover:border-primary transition-colors cursor-pointer">
                  <img
                    alt="User profile avatar"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWH6-t0oC2d4ZrBGKLQZiab7gyCu_eQpv3Rhc-dl6ct68l8iub7q3_B_yqLgQueVdexLdZh0gjTPRS-H9riIlG58NJwlKaus69LcJDt97cBIf8MOWwuenY4g2oY8vFxP8zc_JZzZ0CdXzjlhvclK1YJAKvOQnDmsG_bvzywjXC_TeuSMYmn8Gbuy9YXd8_uyj899mQ5jUVFHjs6iu1deUzRMlYtn95mwqu1rqxGb3I9ofxnR-uliEy2vdidKxFD3InXxmo_sWGbYz3"
                  />
                </div>
                {/* <!-- Dropdown Menu --> */}
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-xl py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                  <a
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    href="#"
                  >
                    Edit Profile
                  </a>
                  <a
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    href="#"
                  >
                    Change Password
                  </a>
                  <hr className="my-2 border-slate-700" />
                  <button
                    className="block w-full text-left cursor-pointer px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-8 py-6">
        {/* <!-- Header Section --> */}
        <section className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3 font-headline">
            Welcome back, Shubh!
          </h1>
          <p className="text-slate-400 text-lg">
            Here's a breakdown of your marketplace activity.
          </p>
        </section>
        {/* <!-- Large Premium Summary Cards Grid --> */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* <!-- Total Listed --> */}
          <div className="group relative bg-slate-800/40 border border-slate-700/50 p-5 rounded-3xl hover:border-primary/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Total Listed
              </p>
              <div className="w-12 h-12 rounded-2xl bg-slate-700/30 flex items-center justify-center text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined">inventory</span>
              </div>
            </div>
            <p className="text-6xl font-black text-white mb-2">24</p>
            <div className="h-1.5 w-1/3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full"></div>
            </div>
          </div>
          {/* <!-- Active --> */}
          <div className="group relative bg-slate-800/40 border border-slate-700/50 p-5 rounded-3xl hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Active Listings
              </p>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  sensors
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-4">
              <p className="text-6xl font-black text-emerald-500 mb-2">18</p>
            </div>
            <p className="text-xs text-slate-500 font-medium">Updated 5m ago</p>
          </div>
          {/* <!-- Reserved --> */}
          <div className="group relative bg-slate-800/40 border border-slate-700/50 p-5 rounded-3xl hover:border-amber-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Reserved
              </p>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bookmark
                </span>
              </div>
            </div>
            <p className="text-6xl font-black text-amber-500 mb-2">04</p>
            <p className="text-xs text-slate-500 font-medium">
              Awaiting finalization
            </p>
          </div>
          {/* <!-- Sold --> */}
          <div className="group relative bg-slate-800/40 border border-slate-700/50 p-5 rounded-3xl hover:border-blue-400/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Sold Items
              </p>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  payments
                </span>
              </div>
            </div>
            <p className="text-6xl font-black text-blue-400 mb-2">02</p>
            <p className="text-xs text-slate-500 font-medium">
              Last sale: 2h ago
            </p>
          </div>
          {/* <!-- Requests Received --> */}
          <div className="group relative bg-slate-800/40 border border-slate-700/50 p-5 rounded-3xl hover:border-red-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Requests Recv
              </p>
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 animate-pulse group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  inbox_customize
                </span>
              </div>
            </div>
            <p className="text-6xl font-black text-red-500 mb-2">12</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <p className="text-xs text-red-500 font-bold">Action Required</p>
            </div>
          </div>
          {/* <!-- Requests Sent --> */}
          <div className="group relative bg-slate-800/40 border border-slate-700/50 p-5 rounded-3xl hover:border-primary/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Requests Sent
              </p>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  outbox
                </span>
              </div>
            </div>
            <p className="text-6xl font-black text-primary mb-2">05</p>
            <p className="text-xs text-slate-500 font-medium">
              Waiting for replies
            </p>
          </div>
        </section>
        {/* <!-- Prominent Quick Actions Section --> */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold font-headline">Quick Actions</h2>
            <div className="h-px flex grow bg-slate-800"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <button className="flex flex-col items-center justify-center gap-4 p-10 bg-primary hover:bg-primary/90 transition-all rounded-3xl shadow-xl shadow-primary/10 group active:scale-[0.98]">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-4xl text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  add_circle
                </span>
              </div>
              <span className="text-base font-bold text-white">
                Add New Item
              </span>
            </button>
            <button className="flex flex-col items-center justify-center gap-4 p-10 bg-slate-800 border border-slate-700/50 hover:border-primary transition-all rounded-3xl group active:scale-[0.98]">
              <div className="w-14 h-14 bg-slate-700/30 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary">
                  inventory_2
                </span>
              </div>
              <span className="text-base font-bold text-slate-200">
                Manage Listings
              </span>
            </button>
            <button className="flex flex-col items-center justify-center gap-4 p-10 bg-slate-800 border border-slate-700/50 hover:border-primary transition-all rounded-3xl group active:scale-[0.98]">
              <div className="w-14 h-14 bg-slate-700/30 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary">
                  settings
                </span>
              </div>
              <span className="text-base font-bold text-slate-200">
                Account Settings
              </span>
            </button>
          </div>
        </section>
      </main>
      {/* <!-- Bottom Navigation for Mobile --> */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 px-8 h-20 flex justify-between items-center z-50">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dashboard
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Dashboard
          </span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Browse
          </span>
        </a>
        <div className="relative -top-8">
          <button className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 border-4 border-slate-900">
            <span className="material-symbols-outlined text-white text-3xl">
              add
            </span>
          </button>
        </div>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Inbox
          </span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Profile
          </span>
        </a>
      </nav>
    </div>
  );
};

export default DashboardPage;
