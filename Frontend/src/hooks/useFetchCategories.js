import { useEffect, useState } from "react";

export const useFetchCategories = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/categories");
      if (!res.ok) {
        console.log("Failed to get categories");
      }

      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  });

  return data;
};
