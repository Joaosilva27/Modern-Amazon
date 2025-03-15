import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Product } from "./SingleProductPage";

interface Order {
  id: string;
  date: string;
  items: Product[];
  total: number;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

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
              <div key={order.id} className="bg-[#f0f7ed] rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-[#4d5c55]">
                      Order #{order.id}
                    </h2>
                    <p className="text-sm text-[#6b7d76]">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="text-[#4d5c55] font-semibold">
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
