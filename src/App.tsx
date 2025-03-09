import "./App.css";
import Header from "./components/Header";
import AirpodsMaxImage from "./images/airpods.png";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full bg-gradient-to-r from-orange-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-4rem)]">
            <div className="flex-1 space-y-6 lg:pr-20 py-12">
              <h1 className="text-3xl lg:text-7xl font-bold leading-tight text-white">
                Subscribe to Amazon Prime
              </h1>

              <p className="text-xl lg:text-2xl max-w-2xl text-white/90">
                Enjoy exclusive benefits including:
                <ul className="mt-4 space-y-3 list-disc list-inside text-white/80">
                  <li>Free fast delivery</li>
                  <li>Prime Video streaming</li>
                  <li>Exclusive member deals</li>
                  <li>Prime Gaming benefits</li>
                </ul>
              </p>

              <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Try Prime Free
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 w-full lg:pl-12">
              <img
                src={AirpodsMaxImage}
                alt="AirPods Max in Black"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
