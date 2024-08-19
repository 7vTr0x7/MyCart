import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import CartProduct from "./features//CartProduct";
import Details from "./features/Details";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cart);

  return (
    <>
      <Header />
      <main className="container my-4">
        <p className="text-center fw-bold fs-4">My Cart</p>
        <div className="row my-4">
          <div className="col-md-7">
            {cartProducts.length > 0 &&
              cartProducts.map((prod) => (
                <div key={prod._id}>
                  <CartProduct prod={prod} />
                </div>
              ))}
          </div>
          <div className="col-md-5">
            <Details products={cartProducts} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
