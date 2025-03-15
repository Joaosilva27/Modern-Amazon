import { Link } from "react-router";
import { getAuth } from "firebase/auth";

const PrimeSuccessPage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <div className="inline-block bg-[#f0f7ed] rounded-full p-4 mb-6">
            <svg
              className="w-16 h-16 text-[#cbddc6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-[#4d5c55] mb-4">
            Welcome to Prime, <span>{user?.displayName}</span>!
          </h1>
          <p className="text-xl text-[#6b7d76] mb-8">
            Your membership is now active. A confirmation has been sent to your
            email.
          </p>

          <div className="bg-[#f0f7ed] rounded-xl p-8 max-w-2xl mx-auto mb-8">
            <Link
              to="/benefits"
              className="inline-block w-full py-3 bg-[#cbddc6] hover:bg-[#9ab096] text-[#4d5c55] rounded-lg font-semibold transition-colors"
            >
              Start Exploring Prime Benefits
            </Link>
          </div>

          <div className="text-[#6b7d76] max-w-2xl mx-auto space-y-4">
            <div className="flex items-center gap-2 justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#cbddc6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <p>Secure payment processed · 30-day money back guarantee</p>
            </div>

            <p className="text-sm border-t border-[#cbddc6] pt-4">
              Manage your membership in{" "}
              <Link
                to="/account"
                className="text-[#4d5c55] font-semibold hover:underline"
              >
                Account Settings
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeSuccessPage;
