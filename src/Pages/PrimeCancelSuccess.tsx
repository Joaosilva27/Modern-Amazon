import { Link } from "react-router";

export default function PrimeCancelSuccess() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-[#cbddc6] rounded-xl bg-[#f0f7ed] p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-[#e5efe2] rounded-full">
                <svg
                  className="w-12 h-12 text-[#a8c0a0]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#4d5c55] mb-4">
              Prime Membership Canceled
            </h2>
            <p className="text-[#6b7d76] mb-8 max-w-xl mx-auto">
              Your Amazon Prime subscription has been successfully canceled.
              You'll lose access to Prime benefits at the end of your billing
              period.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/account" className="flex-1">
                <button className="w-full px-8 py-3 bg-[#cbddc6] text-white rounded-lg font-semibold hover:bg-[#9ab096] transition-colors">
                  Back to Account
                </button>
              </Link>

              <Link to="/browse" className="flex-1">
                <button className="w-full px-8 py-3 border-2 border-[#cbddc6] text-[#6b7d76] rounded-lg font-semibold hover:border-[#9ab096] hover:text-[#4d5c55] transition-colors">
                  Browse Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
