import AirpodsMaxImage from "./images/airpods.gif";
import { Link } from "react-router";

function App() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full mt-5 md:mt-10 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-[#cbddc6] leading-tight lg:hidden text-center">
            The Future of Sound, Elevated
          </h1>

          <div className="relative group w-full lg:order-2 flex justify-center">
            <img
              src={AirpodsMaxImage}
              alt="Premium Audio Experience"
              className="relative z-10 max-w-80 md:max-w-160  h-auto transform group-hover:translate-y-[-10px] transition-transform duration-300 mx-auto"
            />
          </div>

          <div className="space-y-8 lg:order-1 w-full">
            <h1 className="hidden lg:block text-5xl md:text-6xl font-bold text-[#cbddc6] leading-tight text-center lg:text-left">
              The Future of Sound, Elevated
            </h1>

            <div className="space-y-8 pt-5 lg:pt-0">
              <p className="text-xl text-[#6b7d76] leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                Experience audio perfection with our most advanced technology
                yet. Prime members unlock exclusive access to spatial audio
                innovations and personalized soundscapes.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start">
                  <Link
                    to="/prime-signup"
                    className="flex justify-center lg:block"
                  >
                    <button className="w-full px-8 py-4 bg-gradient-to-r from-[#cbddc6] to-[#a8c0a0] text-[#2d3b36] rounded-lg font-semibold hover:scale-[1.02] transition-transform shadow-md hover:shadow-lg">
                      Try Prime Free
                    </button>
                  </Link>

                  <Link to="/benefits" className="flex justify-center lg:block">
                    <button className="w-full px-8 py-4 border-2 border-[#cbddc6] text-[#6b7d76] rounded-lg hover:border-[#9ab096] hover:text-[#4d5c55] transition-colors">
                      Explore Benefits
                    </button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center lg:justify-items-start">
                  {["24h Delivery", "Lossless Audio", "5-Year Warranty"].map(
                    (item) => (
                      <Link
                        to="/features"
                        key={item}
                        className="w-full max-w-[200px]"
                      >
                        <div className="p-4 bg-[#e5efe2] rounded-lg border-2 border-[#cbddc6] hover:border-[#9ab096] transition-colors text-center">
                          <span className="text-[#4d5c55] font-medium">
                            {item}
                          </span>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
