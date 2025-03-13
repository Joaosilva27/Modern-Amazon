import { Link } from "react-router";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 9.99,
      quantity: 2,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Premium Leather Wallet",
      price: 49.99,
      quantity: 1,
      image:
        "https://cdn.dummyjson.com/products/images/accessories/Premium%20Leather%20Wallet/thumbnail.png",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4d5c55] mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 border-b border-[#cbddc6]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain bg-[#f0f7ed] rounded-lg p-2"
                />
                <div className="flex-1">
                  <h3 className="text-[#4d5c55] font-medium">{item.title}</h3>
                  <p className="text-[#cbddc6] font-semibold">€{item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-1 bg-[#f0f7ed] rounded-lg text-[#4d5c55]">
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="px-2 py-1 bg-[#f0f7ed] rounded-lg text-[#4d5c55]">
                        +
                      </button>
                    </div>
                    <button className="text-[#6b7d76] hover:text-[#cbddc6] transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#4d5c55] font-semibold">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-[#f0f7ed] p-6 rounded-xl h-fit sticky top-4">
            <h2 className="text-xl font-semibold text-[#4d5c55] mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Subtotal</span>
                <span className="text-[#4d5c55]">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Shipping</span>
                <span className="text-[#4d5c55]">€{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b7d76]">Taxes</span>
                <span className="text-[#4d5c55]">€{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-[#cbddc6]">
                <span className="text-[#4d5c55] font-semibold">Total</span>
                <span className="text-[#4d5c55] font-semibold">
                  €{total.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full py-3 bg-[#cbddc6] hover:bg-[#9ab096] text-[#4d5c55] rounded-lg font-semibold transition-colors mt-6">
              Proceed to Checkout
            </button>

            <div className="mt-4 text-center">
              <Link
                to="/"
                className="text-[#6b7d76] hover:text-[#4d5c55] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {cartItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6b7d76] mb-4">Your cart is empty</p>
            <Link
              to="/"
              className="px-6 py-2 bg-[#cbddc6] text-[#4d5c55] rounded-lg font-medium hover:bg-[#9ab096] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
