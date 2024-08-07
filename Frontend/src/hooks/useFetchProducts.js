import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};
