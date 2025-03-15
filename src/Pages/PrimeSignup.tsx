import { Link } from "react-router";

export default function PrimeSignup() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#cbddc6] leading-tight">
              Elevate Your Experience
            </h1>
            <p className="text-xl text-[#4d5c55] max-w-2xl mx-auto">
              Unlock premium benefits across entertainment, shopping, and
              exclusive member services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-2 border-[#cbddc6] bg-[#f0f7ed] hover:shadow-lg transition-all">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                  <h3 className="text-2xl font-semibold text-[#4d5c55]">
                    Monthly Membership
                  </h3>
                </div>
                <div className="pl-7 space-y-4">
                  <p className="text-4xl font-bold text-[#4d5c55]">
                    €12.99<span className="text-xl text-[#6b7d76]">/month</span>
                  </p>
                  <Link to="/prime-checkout">
                    <button className="w-full py-4 bg-[#cbddc6] text-[#4d5c55] rounded-lg font-semibold hover:bg-[#9ab096] transition-colors">
                      Start Free Trial
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-[#cbddc6] bg-[#e5efe2] hover:shadow-lg transition-all">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                  <h3 className="text-2xl font-semibold text-[#4d5c55]">
                    Annual Membership
                  </h3>
                  <span className="px-3 py-1 bg-[#cbddc6] text-[#4d5c55] rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
                <div className="pl-7 space-y-4">
                  <p className="text-4xl font-bold text-[#4d5c55]">
                    €119<span className="text-xl text-[#6b7d76]">/year</span>
                  </p>
                  <p className="text-[#6b7d76]">(€9.92/month equivalent)</p>
                  <Link to="/prime-checkout">
                    <button className="w-full py-4 bg-gradient-to-r from-[#cbddc6] to-[#a8c0a0] text-[#4d5c55] rounded-lg font-semibold hover:scale-[1.02] transition-transform">
                      Save 23%
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#4d5c55] border-l-4 border-[#cbddc6] pl-4">
              Prime Member Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Ad-free music streaming",
                "4K Ultra HD content",
                "Exclusive deals & early access",
                "Free same-day delivery",
                "Unlimited photo storage",
                "Prime Gaming benefits",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 hover:bg-[#f0f7ed] rounded-lg transition-colors"
                >
                  <div className="w-2 h-2 bg-[#cbddc6] rounded-full" />
                  <span className="text-[#4d5c55]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center py-8 border-t-2 border-[#cbddc6]">
            <div className="inline-flex items-center gap-4 text-[#6b7d76]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#cbddc6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <p>
                Secure payment processing · Cancel anytime · 30-day money back
                guarantee
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
