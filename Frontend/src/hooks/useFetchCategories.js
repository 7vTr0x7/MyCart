import { useEffect, useState } from "react";

export const useFetchCategories = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://my-cart-backend.vercel.app/api/categories"
      );

      const data = await res.json();
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
