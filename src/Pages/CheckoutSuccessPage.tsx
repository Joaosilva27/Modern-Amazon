import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Product } from "./SingleProductPage";

const CheckoutSuccessPage = () => {
  const location = useLocation();
  const [email] = useState(location.state?.email || "");
  const [orderItems, setOrderItems] = useState<Product[]>([]);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 5.99;
  const tax = subtotal * 0.11;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("product") || "[]");
    setOrderItems(cartItems);
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <div className="inline-block bg-green-100 rounded-full p-4 mb-6">
            <svg
              className="w-16 h-16 text-green-600"
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
            Order Confirmed!
          </h1>
          <p className="text-xl text-[#6b7d76] mb-8">
            Thank you for your purchase. A confirmation email has been sent to{" "}
            <span className="font-semibold text-[#4d5c55]">{email}</span>.
          </p>

          <div className="bg-[#f0f7ed] rounded-xl p-8 max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-[#4d5c55] mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-8">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-16 h-16 object-contain bg-white rounded-lg p-1"
                    />
                    <div>
                      <h3 className="text-[#4d5c55] font-medium">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#6b7d76]">{item.brand}</p>
                    </div>
                  </div>
                  <span className="text-[#4d5c55]">€{item.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Subtotal</span>
                <span className="text-[#4d5c55]">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Shipping</span>
                <span className="text-[#4d5c55]">
                  {subtotal + tax >= 20 ? "Free" : `€${shipping.toFixed(2)}`}
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
                  {subtotal + tax >= 20
                    ? (total - shipping).toFixed(2)
                    : total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/browse"
            className="inline-block px-8 py-3 bg-[#cbddc6] hover:bg-[#9ab096] text-[#4d5c55] rounded-lg font-semibold transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
