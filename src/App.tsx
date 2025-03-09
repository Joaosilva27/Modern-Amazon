import Header from "./components/Header";
import AirpodsMaxImage from "./images/airpods.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-tight">
              The Future of Sound, Elevated
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Experience audio perfection with our most advanced technology yet.
              Prime members unlock exclusive access to spatial audio innovations
              and personalized soundscapes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:scale-[1.02] transition-transform">
                  Try Prime Free
                </button>
                <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                  Explore Benefits
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {["24h Delivery", "Lossless Audio", "5-Year Warranty"].map(
                  (item) => (
                    <div
                      key={item}
                      className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-colors"
                    >
                      <span className="text-cyan-400 font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Product Display */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl opacity-40 animate-pulse" />
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
