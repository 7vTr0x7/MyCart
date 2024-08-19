import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://my-cart-backend.vercel.app/api/products"
      );
      if (!res.ok) {
        console.log("failed to get products");
      }
      const data = await res.json();
      setProducts(data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};
