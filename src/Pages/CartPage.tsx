import { useState } from "react";
import { Link } from "react-router";
import { Product } from "./SingleProductPage";

const CartPage = () => {
  const [productData, setProductData] = useState<Product[]>(
    JSON.parse(localStorage.getItem("product") || "[]")
  );

  const subtotal = productData.reduce(
    (sum: number, item: Product) => sum + item.price,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.011;
  const total = subtotal + shipping + tax;

  const onRemoveProduct = (index: number) => {
    const onRemove = productData.filter((_: Product, i: number) => i !== index);
    localStorage.setItem("product", JSON.stringify(onRemove));
    setProductData(onRemove);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4d5c55] mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {productData?.map((item: Product, id: number) => (
              <div
                key={id}
                className="flex items-start gap-4 p-4 border-b border-[#cbddc6]"
              >
                <Link to={`/${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-24 h-24 object-contain bg-[#f0f7ed] rounded-lg p-2"
                  />
                </Link>

                <div className="flex-1">
                  <Link to={`/${item.id}`}>
                    <h3 className="text-[#4d5c55] font-medium inline">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-[#cbddc6] font-semibold">€{item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => onRemoveProduct(id)}
                      className="flex items-center gap-1 px-3 py-1 bg-[#f0f7ed] hover:bg-[#cbddc6] text-[#6b7d76] rounded-full transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      <span className="text-sm">Remove</span>
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#4d5c55] font-semibold">€{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {productData.length !== 0 && (
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
                  <span className="text-[#4d5c55]">
                    {total >= 20 ? (
                      "Free Shipping"
                    ) : (
                      <span>€{shipping.toFixed(2)}</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7d76]">Taxes</span>
                  <span className="text-[#4d5c55]">€{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-[#cbddc6]">
                  <span className="text-[#4d5c55] font-semibold">Total</span>
                  <span className="text-[#4d5c55] font-semibold">
                    {total >= 20 ? (
                      <span>€{(total - shipping).toFixed(2)}</span>
                    ) : (
                      <span> €{total.toFixed(2)}</span>
                    )}
                  </span>
                </div>
              </div>

              <button className="w-full py-3 bg-[#cbddc6] hover:bg-[#9ab096] text-[#4d5c55] rounded-lg font-semibold transition-colors mt-6">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="/browse"
                  className="text-[#6b7d76] hover:text-[#4d5c55] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>

        {productData.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6b7d76] mb-4">Your cart is empty</p>
            <Link
              to="/browse"
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
