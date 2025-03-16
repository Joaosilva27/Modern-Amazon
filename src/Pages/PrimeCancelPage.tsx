import { Link } from "react-router";

export default function PrimeCancelPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-[#cbddc6] rounded-xl bg-[#f0f7ed] p-8 text-center">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#4d5c55] mb-4">
                Cancel Amazon Prime?
              </h2>
              <p className="text-[#6b7d76]">
                You'll lose these benefits immediately:
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Fast FREE Delivery",
                "Prime Video Access",
                "Exclusive Deals",
                "Premium Music",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-4 bg-[#e5efe2] rounded-lg"
                >
                  <svg
                    className="w-5 h-5 text-[#a8c0a0]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#4d5c55]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Confirmation */}
            <div className="space-y-6">
              <p className="text-xl text-[#4d5c55] font-semibold">
                Are you sure you want to cancel?
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 border-2 border-[#cbddc6] text-[#6b7d76] rounded-lg font-semibold hover:border-[#9ab096] hover:text-[#4d5c55] transition-colors">
                  Yes, Cancel Prime
                </button>

                <Link to="/account">
                  <button className="px-8 py-3 bg-[#cbddc6] text-white rounded-lg font-semibold hover:bg-[#9ab096] transition-colors">
                    No, Keep Prime
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
