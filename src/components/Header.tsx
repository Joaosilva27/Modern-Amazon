const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
              className="h-8 w-auto"
            />

            <nav className="hidden md:flex items-center gap-6 text-white/90">
              <button className="hover:text-white transition-colors">
                Account
              </button>
              <button className="hover:text-white transition-colors">
                Orders
              </button>
              <button className="hover:text-white transition-colors">
                Prime
              </button>
            </nav>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative rounded-full bg-white/10 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search Amazon"
                className="w-full bg-transparent px-6 py-3 text-white placeholder-white/80 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FF9900] hover:bg-[#FF8C00] transition-colors">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white">
            <button className="hidden lg:flex items-center gap-2 hover:text-white/80 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="font-medium">Cart</span>
              <span className="bg-[#FF9900] text-xs px-2 py-1 rounded-full">
                3
              </span>
            </button>

            <button className="hidden md:flex items-center gap-2 hover:text-white/80 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
