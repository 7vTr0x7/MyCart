import { useState } from "react";

export const useFetchProductsByIds = (ids) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://mycartbackend.vercel.app/api/products/productIds",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ids),
        }
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

  fetchData();

  return products;
};
