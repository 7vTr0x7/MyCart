import { useEffect, useState } from "react";

export const useFetchCategories = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://mycartbackend.vercel.app/api/categories"
      );
      if (!res.ok) {
        console.log("failed to get products", res.status);
      }
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
