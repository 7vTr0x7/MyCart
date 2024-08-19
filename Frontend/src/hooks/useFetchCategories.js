import { useEffect, useState } from "react";

export const useFetchCategories = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://my-cart-backend.vercel.app/api/categories"
      );
      if (!res.ok) {
        console.log("failed to get products");
      }
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
