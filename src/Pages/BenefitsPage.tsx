export default function Benefits() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#cbddc6] leading-tight">
              Prime Audio Excellence
            </h1>
            <p className="text-xl text-[#4d5c55]">
              Experience sound like never before with our enhanced audio
              ecosystem
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lossless Audio Quality",
                description:
                  "24-bit/192kHz resolution for studio-grade fidelity",
                color: "bg-[#e5efe2]",
              },
              {
                title: "3D Spatial Audio",
                description: "Immersive surround sound powered by Dolby Atmos",
                color: "bg-[#f0f7ed]",
              },
              {
                title: "Adaptive Sound Profiles",
                description: "AI-powered listening optimization in real-time",
                color: "bg-[#e5efe2]",
              },
              {
                title: "Exclusive Content",
                description:
                  "Prime-only podcasts, concerts, and audio experiences",
                color: "bg-[#f0f7ed]",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 border-[#cbddc6] ${benefit.color} hover:shadow-lg transition-all`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                  <h3 className="text-2xl font-semibold text-[#4d5c55]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-4 text-[#6b7d76] pl-7">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Specs */}
          <div className="py-12 space-y-8">
            <h2 className="text-3xl font-bold text-[#4d5c55] border-l-4 border-[#cbddc6] pl-4">
              Technical Superiority
            </h2>
            <div className="grid grid-cols-2 gap-4 text-[#6b7d76]">
              <div className="p-4 border-b-2 border-[#cbddc6]">
                <p className="font-medium">Frequency Response</p>
                <p>5Hz - 40kHz</p>
              </div>
              <div className="p-4 border-b-2 border-[#cbddc6]">
                <p className="font-medium">Signal-to-Noise</p>
                <p>＞120dB</p>
              </div>
              <div className="p-4 border-b-2 border-[#cbddc6]">
                <p className="font-medium">Codec Support</p>
                <p>LDAC, aptX HD, ALAC</p>
              </div>
              <div className="p-4 border-b-2 border-[#cbddc6]">
                <p className="font-medium">Latency</p>
                <p>＜15ms</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-[#cbddc6] to-[#a8c0a0] text-[#4d5c55] rounded-lg font-semibold hover:scale-[1.02] transition-transform shadow-md">
              Activate Prime Audio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
