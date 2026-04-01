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
                <span className="material-symbols-outlined text-2xl">sync_alt</span>
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
                Exchange
              </a>
              <a
                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                About
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                List an Item
              </button>
              <div className="size-10 rounded-full bg-surface-dark border border-slate-800 flex items-center justify-center cursor-pointer overflow-hidden">
                <img
                  alt="User avatar"
                  data-alt="Abstract circular user profile avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHtJ_iTf_t-ERR4Gke82I9f_qswjGuJipM5Grf_VFin4yIYok088qSh62v5lwF7kpqB4Qk4g2CpULBpjB_qDq2U6JauZZNUmjhlvcqB6lMu2trDDE_zUxfAlVIfLFehCIUML8anqAbwOhgo7MP1wuuC6hhL2uTHBxFiSAhgPi4lcoehq85bLM6j5Oke3f4jvVDD5JljYnZBkD4sxjYDJp3o3LPWkGRlcj5KHlz3AsjvxFwH3Jya5luVrU_5i6ZrrBdCVNh4dzoW-Dm"
                />
              </div>
            </div>
          </div>
        </header>
        {/* <!-- High-Impact Hero Section --> */}
        <section className="relative w-full py-7 lg:py-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,125,243,0.08),transparent_70%)]"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Find what you need <br />
              <span className="text-primary">nearby</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
              The premium marketplace for pre-loved goods and sustainable
              exchange. Join a community built on trust and longevity.
            </p>
            <div className="max-w-3xl mx-auto">
              {/* <!-- Prominent Central Search Bar --> */}
              <div className="group relative flex items-center p-2 rounded-2xl bg-surface-dark/40 border border-slate-800 focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300 shadow-2xl">
                <div className="flex-1 flex items-center px-5">
                  <span className="material-symbols-outlined text-slate-500 mr-3 group-focus-within:text-primary transition-colors">
                    search
                  </span>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 py-4 text-lg"
                    placeholder="Search electronics, furniture, or books..."
                    type="text"
                  />
                </div>
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  Search
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Popular:
                </span>
                <a
                  className="px-3 py-1.5 rounded-full bg-surface-dark border border-slate-800 text-xs font-semibold text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                  href="#"
                >
                  #MacBookPro
                </a>
                <a
                  className="px-3 py-1.5 rounded-full bg-surface-dark border border-slate-800 text-xs font-semibold text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                  href="#"
                >
                  #VintageSofa
                </a>
                <a
                  className="px-3 py-1.5 rounded-full bg-surface-dark border border-slate-800 text-xs font-semibold text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                  href="#"
                >
                  #RoadBikes
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Category Chips Section --> */}
        <section className="w-full py-16 bg-surface-dark/30 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
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
                  <span className="material-symbols-outlined text-2xl">chair</span>
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
                  <span className="material-symbols-outlined text-2xl">book_2</span>
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
                  <span className="material-symbols-outlined text-2xl">build</span>
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
                High-demand items with verified lifecycle status.
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
                  90% Life Left
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
                  <span>Brooklyn, NY • 2 miles away</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-emerald-500"></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                  Excellent Condition
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
                  98% Life Left
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
                  <span>Manhattan, NY • 5 miles away</span>
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
                  75% Life Left
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
                  <span>Queens, NY • 8 miles away</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-yellow-500"></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                  Good Condition
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
                  85% Life Left
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
                  <span>Hoboken, NJ • 12 miles away</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-emerald-500"></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                  Authentic Refurbished
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
                Three simple paths to sustainability. Whether you want to
                declutter, acquire, or swap.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-background-dark border border-slate-800 hover:border-primary/30 transition-all duration-300">
                <div className="size-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">sell</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sell</h3>
                <p className="text-slate-400 leading-relaxed">
                  List your quality pre-loved items with verified descriptions
                  and get fair value directly from your neighbors.
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
                  Can't find what you need? Post a request to the community and
                  let sellers come to you with their available inventory.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-background-dark border border-slate-800 hover:border-primary/30 transition-all duration-300">
                <div className="size-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">
                    published_with_changes
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Exchange</h3>
                <p className="text-slate-400 leading-relaxed">
                  The heart of our bazar. Swap items of equivalent value with
                  others to keep the circular economy moving.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CTA & Local Impact Section --> */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-100 leading-[1.1] mb-10">
                Ready to join the local movement?
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
                      Verified Users Only
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Every member is identity-checked for maximum safety and
                      trust in every transaction.
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
                      Reduce Footprint
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Lower your environmental impact by giving goods a second
                      life within your own community.
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
                      Escrow Payments
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Funds are held securely until the exchange is verified by
                      both parties, ensuring peace of mind.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all">
                  Get Started Today
                </button>
                <button className="px-10 py-5 rounded-2xl bg-surface-dark text-slate-100 font-bold text-lg border border-slate-800 hover:bg-slate-800 transition-all">
                  Download App
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl h-500px lg:h-650px bg-surface-dark">
                <img
                  className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                  data-alt="Stylized dark map of New York City streets"
                  data-location="New York City"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHbln1og4A-t1-3kaTWT7_rUoTzUXoZavoRkVjUsbERbCOmvMPSDmILe4ETisL7fLSAwxlVLGY3Ffrd0HjElSPX8LD2yrAza8csqUdn3KhUcpq4cCcR4X1-ZaCoKrlWXXLja2ZTr9Wx0dlidpSye8OlovR8pL0g9ftd7Cytiw-Mh2Xt_D2IvyKyeBdA5m0NeFU4PhV9IBDSzpk-sjVMqPinY4K9kf4CqN09ORa_WgdFKgoubQYasbJ5hfecMhLbwOthAMtghcj1Yo_"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-background-dark/80 backdrop-blur-2xl rounded-3xl border border-slate-800/50 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-3 rounded-full bg-primary relative">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping"></div>
                    </div>
                    <p className="text-base font-bold text-slate-100 tracking-tight">
                      248 active exchanges right now in NYC
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                      <div className="size-10 rounded-full border-2 border-background-dark bg-slate-700"></div>
                      <div className="size-10 rounded-full border-2 border-background-dark bg-slate-600"></div>
                      <div className="size-10 rounded-full border-2 border-background-dark bg-slate-500"></div>
                      <div className="size-10 rounded-full border-2 border-background-dark bg-slate-400"></div>
                      <div className="size-10 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                        +1.2k
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 font-medium italic">
                      Join the movement
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
                  The world's most trusted marketplace for pre-loved quality
                  goods. Join our mission to build a more sustainable future.
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
                    <a className="hover:text-primary transition-colors" href="#">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Trust &amp; Safety
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Exchange Policy
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Pricing
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
                    <a className="hover:text-primary transition-colors" href="#">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Local Events
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Sustainability Blog
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
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
                  Stay updated with the latest drops near you and sustainable
                  living tips.
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
              <p>© 2024 SecondHand Bazar Inc. All rights reserved.</p>
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
