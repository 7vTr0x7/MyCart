import { useEffect, useState } from "react";

export const useFetchCategories = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://my-cart-backend.vercel.app/api/categories"
      );
      if (!res.ok) {
        console.error(`HTTP error! status: ${res}`);
        return;
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
