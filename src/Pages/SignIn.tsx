import GoogleSignIn from "../GoogleSignIn";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-md mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#cbddc6] leading-tight">
              Welcome Back
            </h1>
            <p className="text-[#6b7d76]">
              Access your Prime benefits and personalized experience
            </p>
          </div>

          <div className="p-8 border-2 border-[#cbddc6] rounded-xl bg-[#f0f7ed]">
            <div className="space-y-6">
              <div className="w-full px-6 py-3 bg-white text-[#4d5c55] border-2 border-[#cbddc6] rounded-lg font-semibold hover:bg-[#f0f7ed] transition-colors flex items-center justify-center gap-2">
                <GoogleSignIn />
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-[#6b7d76]">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </main>
    </div>
  );
}
