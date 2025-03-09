export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#cbddc6] leading-tight">
              Prime Member Benefits
            </h1>
            <p className="text-xl text-[#4d5c55]">
              Premium services designed for exceptional experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "24h Delivery",
                description: "Lightning-fast shipping on millions of items",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#cbddc6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
              {
                title: "Lossless Audio",
                description: "Studio-quality sound with Prime Music HD",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#4d5c55]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 15V9h4l6-6v18l-6-6H2zm16 0l4-4m-4 0l4 4" />
                  </svg>
                ),
              },
              {
                title: "5-Year Warranty",
                description: "Extended device protection",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#cbddc6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border-2 border-[#cbddc6] rounded-xl bg-white hover:bg-[#f0f7ed] transition-colors"
              >
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-[#e5efe2]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#4d5c55] text-center">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#6b7d76] text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="p-6 border-2 border-[#cbddc6] rounded-xl bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                <h2 className="text-2xl font-semibold text-[#4d5c55]">
                  24h Delivery
                </h2>
              </div>
              <p className="text-[#6b7d76]">
                Priority shipping with real-time tracking and delivery
                notifications.
              </p>
            </div>

            <div className="p-6 border-2 border-[#cbddc6] rounded-xl bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                <h2 className="text-2xl font-semibold text-[#4d5c55]">
                  Lossless Audio
                </h2>
              </div>
              <p className="text-[#6b7d76]">
                24-bit/192kHz quality streaming with zero compression artifacts.
              </p>
            </div>

            <div className="p-6 border-2 border-[#cbddc6] rounded-xl bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                <h2 className="text-2xl font-semibold text-[#4d5c55]">
                  5-Year Warranty
                </h2>
              </div>
              <p className="text-[#6b7d76]">
                Comprehensive coverage including accidental damage protection.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
