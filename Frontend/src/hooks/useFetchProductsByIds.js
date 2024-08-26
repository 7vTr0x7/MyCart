import { useState } from "react";

export const useFetchProductsByIds = (ids) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      if (ids && ids.length > 0) {
        const res = await fetch(
          "https://mycartbackend.vercel.app/api/products/multiple/productIds",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([...ids]),
          }
        );
        if (!res.ok) {
          console.log("Failed to read products");
        }

        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  return products;
};
