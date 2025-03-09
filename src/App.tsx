import Header from "./components/Header";
import AirpodsMaxImage from "./images/airpods.gif";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 md:gap-16 items-center">
          {/* Main texts */}
          <div className="space-y-8 pt-10 md:pt-0">
            <h1 className="text-5xl md:text-6xl font-bold text-[#cbddc6] leading-tight">
              The Future of Sound, Elevated
            </h1>

            <p className="text-xl text-[#6b7d76] leading-relaxed max-w-2xl">
              Experience audio perfection with our most advanced technology yet.
              Prime members unlock exclusive access to spatial audio innovations
              and personalized soundscapes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#cbddc6] to-[#a8c0a0] text-[#2d3b36] rounded-lg font-semibold hover:scale-[1.02] transition-transform shadow-md hover:shadow-lg">
                  Try Prime Free
                </button>
                <button className="px-8 py-4 border-2 border-[#cbddc6] text-[#6b7d76] rounded-lg hover:border-[#9ab096] hover:text-[#4d5c55] transition-colors">
                  Explore Benefits
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {["24h Delivery", "Lossless Audio", "5-Year Warranty"].map(
                  (item) => (
                    <div
                      key={item}
                      className="p-4 bg-[#e5efe2] rounded-lg border-2 border-[#cbddc6] hover:border-[#9ab096] transition-colors"
                    >
                      <span className="text-[#4d5c55] font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Product display */}
          <div className="relative group">
            <img
              src={AirpodsMaxImage}
              alt="Premium Audio Experience"
              className="relative z-10 w-full h-auto transform group-hover:translate-y-[-10px] transition-transform duration-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
