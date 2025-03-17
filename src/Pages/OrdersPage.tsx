import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Product } from "./SingleProductPage";
import { getAuth } from "firebase/auth";

interface Order {
  id: string;
  date: string;
  items: Product[];
  total: number;
}

const OrdersPage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    try {
      setOrders(storedOrders ? JSON.parse(storedOrders) : []);
    } catch (error) {
      console.error("Error parsing orders:", error);
      localStorage.removeItem("orders");
      setOrders([]);
    }
  }, []);

  const onRemoveOrder = (id: string) => {
    const storedOrders = localStorage.getItem("orders");

    if (storedOrders) {
      try {
        const parsedOrders: Order[] = JSON.parse(storedOrders);
        const filteredOrders = parsedOrders.filter((order) => order.id !== id);
        localStorage.setItem("orders", JSON.stringify(filteredOrders));
        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error processing orders:", error);
        localStorage.removeItem("orders");
        setOrders([]);
      }
    }
  };

  console.log(orders);

  if (!user) {
    return (
      <div className="h-full bg-white flex items-center justify-center">
        <div className="max-w-2xl text-center space-y-6 p-6">
          <h2 className="text-3xl font-bold text-[#4d5c55]">
            To see your orders, you must sign-in first.
          </h2>
          <Link to="/sign-in">
            <button className="px-8 py-3 bg-[#cbddc6] text-[#4d5c55] rounded-lg font-semibold hover:bg-[#9ab096] transition-colors">
              Log In to Continue
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4d5c55] mb-8">Your Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#6b7d76] mb-4">No orders found</p>
            <Link
              to="/browse"
              className="px-6 py-2 bg-[#cbddc6] text-[#4d5c55] rounded-lg font-medium hover:bg-[#9ab096] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders?.map((order) => (
              <div
                key={order.id}
                className="bg-[#f0f7ed] rounded-xl p-6 relative"
              >
                <button
                  onClick={() => onRemoveOrder(order.id)}
                  className="absolute top-4 right-4 p-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-full transition-colors"
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
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-[#4d5c55]">
                      Order <br></br>#{order.id}
                    </h2>
                    <p className="text-sm text-[#6b7d76]">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="text-[#4d5c55] font-semibold mr-10">
                    €{order?.total?.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-4">
                  {order?.items?.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 py-2 border-b border-[#cbddc6]"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-16 h-16 object-contain bg-white rounded-lg p-1"
                      />
                      <div className="flex-1">
                        <h3 className="text-[#4d5c55] font-medium">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#6b7d76]">{item.brand}</p>
                      </div>
                      <span className="text-[#4d5c55]">€{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
