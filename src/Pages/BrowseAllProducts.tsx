import { useEffect, useState } from "react";
import axios from "axios";

const BrowseAllProducts = () => {
  const [products, setProducts] = useState<Array<string>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=0"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-32 sm:h-48 w-full overflow-hidden rounded-t-lg sm:rounded-t-xl">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-scale-down p-2"
                />
              </div>
              <div className="p-2 sm:p-4 space-y-1 sm:space-y-2">
                <h3 className="text-xs sm:text-sm text-[#4d5c55] font-medium line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-[#cbddc6] font-semibold">
                    {product.price}€
                  </span>
                  <div className="flex items-center gap-0.5 text-xs sm:text-sm text-[#6b7d76]">
                    <span>{product.rating}</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-[#cbddc6]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <button className="w-full py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#4d5c55] bg-[#f0f7ed] hover:bg-[#cbddc6] rounded-md sm:rounded-lg transition-colors">
                  <span className="sm:hidden">View</span>
                  <span className="hidden sm:inline">View Product</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseAllProducts;
