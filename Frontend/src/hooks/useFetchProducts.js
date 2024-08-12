import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../pages/products/productsSlice";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/products");
      const data = await res.json();
      setProducts(data);
      dispatch(addProducts(data.data.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};
