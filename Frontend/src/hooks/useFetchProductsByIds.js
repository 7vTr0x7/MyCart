import { useState } from "react";

export const useFetchProductsByIds = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://mycartbackend.vercel.app/api/products/productIds"
      );
      if (!res.ok) {
        console.log("Failed to read products");
      }

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
};
