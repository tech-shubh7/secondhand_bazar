import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-background-dark text-slate-100 antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* <!-- Navigation --> */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-2xl">
                  sync_alt
                </span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-100">
                SecondHand <span className="text-primary">Bazar</span>
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a
                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                Explore
              </a>
              <a
                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                Categories
              </a>
              <a
                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                Requests
              </a>
              <a
                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                About
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="/login"
                className="hidden sm:flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Login
              </a>
              <a
                href="/signup"
                className="hidden sm:flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Sign Up
              </a>
            </div>
          </div>
        </header>
        {/* <!-- High-Impact Hero Section --> */}
        <section className="relative w-full py-7 lg:py-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,125,243,0.08),transparent_70%)]"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Buy, sell, and rent <br />
              <span className="text-primary">nearby</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
              A local marketplace for second-hand products where users can list
              items, send requests, negotiate offers, and complete sales or
              rentals.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Start Selling
                  <span className="material-symbols-outlined text-xl">
                    arrow_right_alt
                  </span>
                </a>
                <a
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-surface-dark text-slate-100 font-bold border border-slate-800 hover:border-primary/30 hover:text-primary transition-all"
                >
                  See What’s New
                  <span className="material-symbols-outlined text-xl">
                    storefront
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center">
                <div className="rounded-xl border border-slate-800 bg-surface-dark/50 px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                    Product Modes
                  </p>
                  <p className="text-sm font-semibold text-slate-100">
                    Sell and Rent
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-surface-dark/50 px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                    Transaction Flow
                  </p>
                  <p className="text-sm font-semibold text-slate-100">
                    Request, negotiate, complete
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-surface-dark/50 px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                    Discovery
                  </p>
                  <p className="text-sm font-semibold text-slate-100">
                    Category and city based
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Marketplace Stats Strip --> */}
        <section className="w-full py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-surface-dark/60 px-6 py-5">
                <p className="text-2xl lg:text-3xl font-black text-slate-100">
                  10k+
                </p>
                <p className="text-sm text-slate-400 mt-1">Active Listings</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-surface-dark/60 px-6 py-5">
                <p className="text-2xl lg:text-3xl font-black text-slate-100">
                  120+
                </p>
                <p className="text-sm text-slate-400 mt-1">Cities Covered</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-surface-dark/60 px-6 py-5">
                <p className="text-2xl lg:text-3xl font-black text-slate-100">
                  35k+
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Requests Processed
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-surface-dark/60 px-6 py-5">
                <p className="text-2xl lg:text-3xl font-black text-slate-100">
                  4.8/5
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  User Experience Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Category Chips Section --> */}
        <section className="w-full py-16 bg-surface-dark/30 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-black text-slate-100 mb-2">
                  Browse by Category
                </h2>
                <p className="text-slate-400">
                  Start with your category and discover nearby products for sale
                  or rent.
                </p>
              </div>
              <a
                className="text-primary font-bold inline-flex items-center gap-2 hover:underline"
                href="#"
              >
                View all categories
                <span className="material-symbols-outlined text-xl">
                  arrow_right_alt
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <a
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-dark border border-slate-800 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                href="#"
              >
                <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    devices
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-100">
                  Electronics
                </span>
              </a>
              <a
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-dark border border-slate-800 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                href="#"
              >
                <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    chair
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-100">
                  Furniture
                </span>
              </a>
              <a
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-dark border border-slate-800 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                href="#"
              >
                <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    book_2
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-100">
                  Books
                </span>
              </a>
              <a
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-dark border border-slate-800 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                href="#"
              >
                <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    directions_car
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-100">
                  Vehicles
                </span>
              </a>
              <a
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-dark border border-slate-800 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                href="#"
              >
                <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    build
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-100">
                  Tools
                </span>
              </a>
              <a
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-dark border border-slate-800 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                href="#"
              >
                <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    checkroom
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-100">
                  Fashion
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Trending Items Grid --> */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 w-full">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-100 mb-2">
                Trending Near You
              </h2>
              <p className="text-slate-400">
                Active local listings across sell and rent modes.
              </p>
            </div>
            <a
              className="text-primary font-bold flex items-center gap-2 hover:underline group"
              href="#"
            >
              View all items{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Card 1 --> */}
            <div className="group flex flex-col bg-surface-dark rounded-3xl border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Green velvet vintage sofa in living room"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_w_k64yRJOdXBpsjuJY7vC2EPD3nub9AQmiV3AseNtln_2xAgGFYk6dJDe_ByZ4uhP-v6g8FXWcPcg3v_rohHQV4h48FuVHTR6kcaOgDo7MxOeivY73mIzosw0Nu5QGTJEik797TjuWI8AI2cBOQv8RAQlvhLGONmQBzx3DSWHVOmg7gI4XHsVFegao7UUdokTPtdpJhikYhU5F2LmYHDTFKLmPf7GMAwwx8zWZ0ZIZwyNLyDlC6Wg0acig4KmSRPOXQ4qApYdtp"
                />
                <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-100 border border-slate-800">
                  USED | SELL
                </div>
                <button className="absolute top-4 right-4 size-10 rounded-full bg-background-dark/80 backdrop-blur-md text-slate-400 hover:text-primary flex items-center justify-center border border-slate-800 shadow-xl transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-100 truncate">
                    Vintage Emerald Sofa
                  </h3>
                  <span className="text-primary font-bold text-xl">$420</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span>Navrangpura, AMD</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-emerald-500"></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                  Used Condition
                </p>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="group flex flex-col bg-surface-dark rounded-3xl border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Macbook Pro laptop on a wooden desk"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7P6QNEfVRAMCLGwtL4D01PGVWN_t3axz0OvLcffgbBB4XT1ukQ6yyG_NNXxTZ__VFcN8GO3qZIDyNPIfJzgzuvWtCPoIsfWHW36-kNw8rqZ1hbrOrbxnbi8FauLFuV0pBVRXZKmFhzEMgwz-60h6vTZFtNVVWbBpnbbQGNBTaS3CS_mq29vYrWtfaaCdGbfCWkHhczVe-kawOEpSwAaXOqmBNk558rNAnXowk9RnzzUyElPqGp_E4Er40HI5w-daWH3kxOzUpHl-"
                />
                <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-100 border border-slate-800">
                  LIKE_NEW | SELL
                </div>
                <button className="absolute top-4 right-4 size-10 rounded-full bg-background-dark/80 backdrop-blur-md text-slate-400 hover:text-primary flex items-center justify-center border border-slate-800 shadow-xl transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-100 truncate">
                    MacBook Pro M2 14"
                  </h3>
                  <span className="text-primary font-bold text-xl">$1,450</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span>Maninagar, AMD</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-emerald-500"></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                  Like New
                </p>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="group flex flex-col bg-surface-dark rounded-3xl border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Professional road bicycle outside"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClHhhuyNkNopWR4qsBB_iyxJTDjZjbJVk92YRb2zI3raBOB9XjKlleSWcHU0S8c-t_HXsOwxO7SHKWsVrTZdBsSR7-jE4WirwDPr0fhSn3qTCJL0oHg-501-XwxNIr2uc_Zrn93fmZ8kcFD6Kuvk_TqDpWkybn66uPfr-e_oG_1US6yR5PcaGXa0mdl1FT1M5ovy6lg6GXJlcXQDgp4D8-MEpB0CpiCiLw_eO6Ih07-d7Q50XldWvm4XFuF9rrBuCnXl5xwy6G6LvR"
                />
                <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-100 border border-slate-800">
                  USED | RENT
                </div>
                <button className="absolute top-4 right-4 size-10 rounded-full bg-background-dark/80 backdrop-blur-md text-slate-400 hover:text-primary flex items-center justify-center border border-slate-800 shadow-xl transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-100 truncate">
                    Canyon Aeroad CF
                  </h3>
                  <span className="text-primary font-bold text-xl">$1,200</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span>Ellisbridge, AMD</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-yellow-500"></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                  Rental Listing
                </p>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div className="group flex flex-col bg-surface-dark rounded-3xl border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Herman Miller Eames lounge chair"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4gG96zQNG9MRdcxxdOL-TDWv5mDzYheKKcfVItBq5TLVEI19x6X7f5bd5_Tdle9-EB8yLhUaKJgyvYSZciqXwIXySeLQzvIY7Xcfe3pdGlN2efD-7mIvFiZCpNx7RV7bH98wbCzGzFuyd3OQogsGzex440zCy1ArQnxQcCbHw__GeWLLneUdmaSvrBQ4kofQsSwYW8eoTPgHEYl_1e8kd1NQtnPi19UqP34tMM2YmwKiY_kqsad0dZ-9W8FVZPba0zLnjf6Ub91mb"
                />
                <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-100 border border-slate-800">
                  USED | SELL
                </div>
                <button className="absolute top-4 right-4 size-10 rounded-full bg-background-dark/80 backdrop-blur-md text-slate-400 hover:text-primary flex items-center justify-center border border-slate-800 shadow-xl transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-100 truncate">
                    Eames Lounge Chair
                  </h3>
                  <span className="text-primary font-bold text-xl">$950</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span>Shekhadi, Petlad</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-emerald-500"></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                  Pre-Owned
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- How it Works Section --> */}
        <section className="w-full py-24 bg-surface-dark border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-slate-100 mb-4">
                How it Works
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
                Three simple actions for the platform: create listings, send
                requests, and close sell or rent deals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-background-dark border border-slate-800 hover:border-primary/30 transition-all duration-300">
                <div className="size-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">
                    sell
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sell</h3>
                <p className="text-slate-400 leading-relaxed">
                  Create a product listing with title, category, condition,
                  price, location, and images to start receiving requests.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-background-dark border border-slate-800 hover:border-primary/30 transition-all duration-300">
                <div className="size-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">
                    local_mall
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Request</h3>
                <p className="text-slate-400 leading-relaxed">
                  Send a request on a product with your message and offered
                  price. Sellers can accept, reject, or complete the request.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-background-dark border border-slate-800 hover:border-primary/30 transition-all duration-300">
                <div className="size-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">
                    event_available
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Rent</h3>
                <p className="text-slate-400 leading-relaxed">
                  For rental-mode products, users can request date ranges while
                  sellers manage availability and finalize requests.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Trust and Transaction Section --> */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-100 leading-[1.1] mb-10">
                Built for reliable local transactions
              </h2>
              <ul className="space-y-8 mb-12">
                <li className="flex items-start gap-5">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-slate-100 mb-1">
                      Verified Account Activity
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Listings, requests, and product actions are tied to user
                      accounts for clear ownership and safer interactions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary">
                      eco
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-slate-100 mb-1">
                      Local Discovery by City
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Buyers can discover products by city and category to make
                      local meetups and handovers practical.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary">
                      payments
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-slate-100 mb-1">
                      End-to-End Request Lifecycle
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Move from pending to accepted, rejected, cancelled, or
                      completed with status-driven updates and notifications.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="/signup"
                  className="px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all"
                >
                  Get Started Today
                </a>
                <a
                  href="/login"
                  className="px-10 py-5 rounded-2xl bg-surface-dark text-slate-100 font-bold text-lg border border-slate-800 hover:bg-slate-800 transition-all"
                >
                  Explore Products
                </a>
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-slate-800 bg-surface-dark p-8 lg:p-10">
              <h3 className="text-2xl font-black text-slate-100 mb-8">
                How a deal closes
              </h3>
              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-800 bg-background-dark px-5 py-4 flex items-start gap-4">
                  <div className="size-8 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">
                      List or discover a product
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Seller publishes product details. Buyer explores by
                      category, city, and condition.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-background-dark px-5 py-4 flex items-start gap-4">
                  <div className="size-8 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">
                      Send request and negotiate
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Buyer sends message and offered price. Seller reviews and
                      updates request status.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-background-dark px-5 py-4 flex items-start gap-4">
                  <div className="size-8 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">
                      Finalize the transaction
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Complete sell or rent flow and keep users informed with
                      notification updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer --> */}
        <footer className="w-full bg-surface-dark border-t border-slate-800 px-6 lg:px-9 py-12 mt-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
                    <span className="material-symbols-outlined text-2xl">
                      sync_alt
                    </span>
                  </div>
                  <h2 className="text-xl font-black tracking-tight text-slate-100">
                    SecondHand Bazar
                  </h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Local marketplace for second-hand product listings with sell,
                  rent, request, favorite, and reporting workflows.
                </p>
                <div className="flex gap-4">
                  <a
                    className="size-10 rounded-xl bg-background-dark border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      social_leaderboard
                    </span>
                  </a>
                  <a
                    className="size-10 rounded-xl bg-background-dark border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      alternate_email
                    </span>
                  </a>
                  <a
                    className="size-10 rounded-xl bg-background-dark border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      public
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-slate-100 font-bold mb-8 uppercase text-xs tracking-widest">
                  Platform
                </h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Trust &amp; Safety
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Request Workflow
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Sell and Rent Modes
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-100 font-bold mb-8 uppercase text-xs tracking-widest">
                  Community
                </h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Forum
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Local Events
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Sustainability Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Impact Reports
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-100 font-bold mb-8 uppercase text-xs tracking-widest">
                  Newsletter
                </h4>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                  Stay updated with fresh listings near you and important
                  request updates.
                </p>
                <div className="flex flex-col gap-3">
                  <input
                    className="w-full bg-background-dark border-slate-800 rounded-xl text-sm focus:ring-primary focus:border-primary py-3 px-4"
                    placeholder="Enter email"
                    type="email"
                  />
                  <button className="bg-primary px-4 py-3 rounded-xl text-white font-bold hover:bg-primary/90 transition-all">
                    Join Newsletter
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
              <p>
                © {new Date().getFullYear()} SecondHand Bazar Inc. All rights
                reserved.
              </p>
              <div className="flex gap-10">
                <a className="hover:text-slate-100 transition-colors" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-slate-100 transition-colors" href="#">
                  Terms of Service
                </a>
                <a className="hover:text-slate-100 transition-colors" href="#">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
