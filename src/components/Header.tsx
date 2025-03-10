import { Link } from "react-router";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#cbddc6] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Left section */}
          <div className="flex items-center gap-8">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
              className="h-9 w-auto"
            />

            <nav className="hidden md:flex items-center gap-6 text-[#6b7d76]">
              <button className="hover:text-[#cbddc6] transition-colors">
                Account
              </button>
              <button className="hover:text-[#cbddc6] transition-colors">
                Orders
              </button>
              <button className="hover:text-[#cbddc6] transition-colors">
                Prime
              </button>
            </nav>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative rounded-lg bg-[#e5efe2] border border-[#cbddc6]">
              <input
                type="text"
                placeholder="Search Amazon"
                className="w-full bg-transparent px-6 py-2.5 text-[#4d5c55] placeholder-[#9ab096] focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-[#cbddc6] hover:bg-[#9ab096] transition-colors">
                <svg
                  className="w-5 h-5 text-[#4d5c55]"
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

          {/* Right section */}
          <div className="flex items-center gap-6 text-[#6b7d76]">
            <button className="flex items-center gap-2 hover:text-[#cbddc6] transition-colors">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="hidden lg:block">Cart</span>
              <span className="bg-[#cbddc6] text-[#4d5c55] text-xs px-2 py-1 rounded-full font-bold">
                3
              </span>
            </button>

            <button className="hidden md:flex items-center gap-2 hover:text-[#cbddc6] transition-colors">
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
              <Link to="/sign-in">
                <span className="hidden lg:block text-orange-300">Sign In</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
