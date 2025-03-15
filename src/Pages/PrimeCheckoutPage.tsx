import { useState } from "react";
import { useNavigate } from "react-router";

const PrimeCheckoutPage = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiration: "",
    cvc: "",
    name: "",
    email: "",
  });

  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">(
    "annual"
  );
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "prime",
      JSON.stringify({ plan: selectedPlan, text: "Prime Member" })
    );
    navigate("/prime-success");
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4d5c55] mb-8">
          Prime Membership
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#f0f7ed] p-6 rounded-xl space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#4d5c55]">
                  Choose Your Plan
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 rounded-xl border-2 ${
                      selectedPlan === "monthly"
                        ? "border-[#9ab096] bg-[#e5efe2]"
                        : "border-[#cbddc6] bg-white"
                    } cursor-pointer`}
                    onClick={() => setSelectedPlan("monthly")}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                      <h3 className="text-lg font-semibold text-[#4d5c55]">
                        Monthly
                      </h3>
                    </div>
                    <p className="text-3xl font-bold text-[#4d5c55]">
                      €12.99
                      <span className="text-lg text-[#6b7d76]">/month</span>
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-xl border-2 ${
                      selectedPlan === "annual"
                        ? "border-[#9ab096] bg-[#e5efe2]"
                        : "border-[#cbddc6] bg-white"
                    } cursor-pointer`}
                    onClick={() => setSelectedPlan("annual")}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#cbddc6] rounded-full" />
                      <h3 className="text-lg font-semibold text-[#4d5c55]">
                        Annual
                      </h3>
                      <span className="px-2 py-1 bg-[#cbddc6] text-[#4d5c55] rounded-full text-sm">
                        Save 23%
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-[#4d5c55]">
                      €119<span className="text-lg text-[#6b7d76]">/year</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#4d5c55]">
                  Payment Details
                </h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-[#4d5c55] block mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-2 border border-[#cbddc6] rounded-lg"
                      value={cardDetails.email}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[#4d5c55] block mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      pattern="\d{16}"
                      placeholder="4242 4242 4242 4242"
                      className="w-full p-2 border border-[#cbddc6] rounded-lg"
                      value={cardDetails.cardNumber}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          cardNumber: e.target.value.replace(/\s/g, ""),
                        })
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#4d5c55] block mb-1">
                        Expiration
                      </label>
                      <input
                        type="text"
                        pattern="\d{2}/\d{2}"
                        placeholder="MM/YY"
                        className="w-full p-2 border border-[#cbddc6] rounded-lg"
                        value={cardDetails.expiration}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            expiration: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[#4d5c55] block mb-1">CVC</label>
                      <input
                        type="text"
                        pattern="\d{3}"
                        placeholder="123"
                        className="w-full p-2 border border-[#cbddc6] rounded-lg"
                        value={cardDetails.cvc}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            cvc: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#4d5c55] block mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-2 border border-[#cbddc6] rounded-lg"
                      value={cardDetails.name}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#cbddc6] hover:bg-[#9ab096] text-[#4d5c55] rounded-lg font-semibold transition-colors"
              >
                Start Prime Membership - €
                {selectedPlan === "annual" ? "119.00/yr" : "12.99/mo"}
              </button>
            </form>
          </div>

          <div className="bg-[#f0f7ed] p-6 rounded-xl h-fit sticky top-4">
            <h2 className="text-xl font-semibold text-[#4d5c55] mb-4">
              Prime Benefits
            </h2>
            <div className="space-y-4">
              {[
                "Ad-free music streaming",
                "4K Ultra HD content",
                "Exclusive deals & early access",
                "Free same-day delivery",
                "Unlimited photo storage",
                "Prime Gaming benefits",
                "Member-only discounts",
                "Priority customer support",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-white rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#cbddc6] rounded-full" />
                  <span className="text-[#4d5c55]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#cbddc6]">
              <div className="flex items-center gap-2 text-sm text-[#6b7d76]">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <p>Cancel anytime · 30-day money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeCheckoutPage;
