import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleProductPage() {
  const params = useParams();
  const [productData, setProductData] = useState<any>();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const fetchedData = await axios.get(
          `https://dummyjson.com/products/${params.productId}`
        );
        setProductData(fetchedData.data);
        console.log(fetchedData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProductData();
  }, [params.productId]);

  return (
    <div>
      <h1>single </h1>
    </div>
  );
}
