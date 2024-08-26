import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import PriceDetails from "./features/PriceDetails";
import { useFetchProductsByIds } from "./../../hooks/useFetchProductsByIds";
import { addProductsToCart, readCart } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const productIds = useSelector((state) => state.cart.productIds);
  const profile = useSelector((state) => state.profile.profile);
  const { _id } = profile;

  const cartProducts = useSelector((state) => state.cart.cart);

  const products = useFetchProductsByIds(productIds);

  useEffect(() => {
    if (productIds && productIds.length > 0 && products) {
      dispatch(addProductsToCart(products));
    }
  }, [productIds]);

  useEffect(() => {
    dispatch(readCart(_id));
  }, [_id]);

  return (
    <>
      <Header />
      <main className="container my-4">
        <p className="text-center fw-bold fs-4">My Cart</p>
        {cartProducts.length === 0 && (
          <p className="text-center fw-bold fs-6">Cart is Empty</p>
        )}

        <div className="row my-4">
          <div className="col-md-7">
            {cartProducts.length > 0 &&
              cartProducts.map((prod) => (
                <div key={prod._id}>
                  <ProductCard product={prod} isCart={true} />
                </div>
              ))}
          </div>
          <div className="col-md-5">
            <PriceDetails products={cartProducts} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
