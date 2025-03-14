import { useState } from "react";
import { Product } from "./SingleProductPage";

const CheckoutPage = () => {
  const [productData] = useState<Product[]>(
    JSON.parse(localStorage.getItem("product") || "[]")
  );

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiration: "",
    cvc: "",
    name: "",
    email: "",
  });

  const subtotal = productData.reduce(
    (sum: number, item: Product) => sum + item.price,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.11;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment processed successfully!");
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4d5c55] mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#f0f7ed] p-6 rounded-xl space-y-4"
            >
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
                        setCardDetails({ ...cardDetails, cvc: e.target.value })
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
                      setCardDetails({ ...cardDetails, name: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#cbddc6] hover:bg-[#9ab096] text-[#4d5c55] rounded-lg font-semibold transition-colors"
              >
                Pay €
                {total >= 20 ? (total - shipping).toFixed(2) : total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order summary */}
          <div className="bg-[#f0f7ed] p-6 rounded-xl h-fit sticky top-4">
            <h2 className="text-xl font-semibold text-[#4d5c55] mb-4">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {productData.map((item: Product) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm text-[#4d5c55] font-medium truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6b7d76]">€{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Subtotal</span>
                <span className="text-[#4d5c55]">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Shipping</span>
                <span className="text-[#4d5c55]">
                  {total >= 20 ? "Free" : `€${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Taxes</span>
                <span className="text-[#4d5c55]">€{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-[#cbddc6]">
                <span className="text-[#4d5c55] font-semibold">Total</span>
                <span className="text-[#4d5c55] font-semibold">
                  €
                  {total >= 20
                    ? (total - shipping).toFixed(2)
                    : total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
