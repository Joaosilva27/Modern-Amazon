import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleProductPage() {
  const params = useParams();
  const [productData, setProductData] = useState<any>();
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const fetchedData = await axios.get(
          `https://dummyjson.com/products/${params.productId}`
        );
        setProductData(fetchedData.data);
        setMainImage(fetchedData.data.images[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProductData();
  }, [params.productId]);

  if (!productData) return null;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-[#f0f7ed] rounded-xl p-4">
            <img
              src={mainImage}
              alt={productData.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {productData.images.map((img: string) => (
              <img
                key={img}
                src={img}
                className="w-20 h-20 cursor-pointer border-2 border-[#cbddc6] rounded-lg"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="border-b border-[#cbddc6] pb-4">
            <h1 className="text-3xl font-bold text-[#4d5c55]">
              {productData.title}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#6b7d76]">by {productData.brand}</span>
              <div className="w-1 h-1 bg-[#cbddc6] rounded-full"></div>
              <div className="flex items-center gap-1 text-[#cbddc6]">
                <span>{productData.rating}</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-[#cbddc6]">
                €{productData.price}
              </span>
              <span className="text-[#6b7d76] line-through">
                €
                {(
                  productData.price /
                  (1 - productData.discountPercentage / 100)
                ).toFixed(2)}
              </span>
              <span className="text-green-600 font-medium">
                {productData.discountPercentage}% off
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div
                className={`px-3 py-1 rounded-full ${
                  productData.stock < 10
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {productData.availabilityStatus}
              </div>
              <span className="text-[#6b7d76]">
                {productData.stock} left in stock
              </span>
            </div>
          </div>

          <p className="text-[#4d5c55] leading-relaxed">
            {productData.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-[#f0f7ed] rounded-lg">
              <span className="text-[#6b7d76] block">Dimensions</span>
              <span className="text-[#4d5c55] font-medium">
                {productData.dimensions.width}cm x{" "}
                {productData.dimensions.height}cm x{" "}
                {productData.dimensions.depth}cm
              </span>
            </div>
            <div className="p-3 bg-[#f0f7ed] rounded-lg">
              <span className="text-[#6b7d76] block">Weight</span>
              <span className="text-[#4d5c55] font-medium">
                {productData.weight}kg
              </span>
            </div>
            <div className="p-3 bg-[#f0f7ed] rounded-lg">
              <span className="text-[#6b7d76] block">SKU</span>
              <span className="text-[#4d5c55] font-medium">
                {productData.sku}
              </span>
            </div>
            <div className="p-3 bg-[#f0f7ed] rounded-lg">
              <span className="text-[#6b7d76] block">Category</span>
              <span className="text-[#4d5c55] font-medium">
                {productData.category}
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 text-[#4d5c55]">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{productData.returnPolicy}</span>
            </div>
            <div className="flex items-center gap-2 text-[#4d5c55]">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{productData.shippingInformation}</span>
            </div>
            <div className="flex items-center gap-2 text-[#4d5c55]">
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
              <span>{productData.warrantyInformation}</span>
            </div>
          </div>

          {/* Reviews */}
          <div className="pt-8">
            <h3 className="text-xl font-semibold text-[#4d5c55] mb-4">
              Customer Reviews
            </h3>
            <div className="space-y-4">
              {productData.reviews.map((review: any) => (
                <div key={review.id} className="bg-[#f0f7ed] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#cbddc6] font-medium">
                      {review.rating}
                    </span>
                    <svg
                      className="w-4 h-4 fill-current text-[#cbddc6]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-[#6b7d76]">
                      {review.title}
                    </span>
                  </div>
                  <p className="text-[#4d5c55]">{review.comment}</p>
                  <p className="text-sm text-[#6b7d76] mt-2">
                    - {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
