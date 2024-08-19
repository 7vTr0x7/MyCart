import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  decQuantity,
  incQuantity,
  removeFromCart,
} from "../pages/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../pages/wishlist/wishlistSlice";

const ProductCard = ({ product, isCart }) => {
  const dispatch = useDispatch();
  const wishlistProductIds = useSelector(
    (state) => state.wishlist.wishlistProductIds
  );
  const productIds = useSelector((state) => state.cart.productIds);

  const addToWishlistHandler = (prod) => {
    dispatch(addToWishlist(prod));
    toast.success("Added to wishlist");
  };
  const addToCartHandler = (prod) => {
    dispatch(addToCart(prod));
    toast.success("Added to wishlist");
  };

  const removeFromWishlistHandler = (prod) => {
    dispatch(removeFromWishlist(prod));
    toast.success("Removed From wishlist");
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Removed From wishlist");
  };

  const handleIncrement = () => {
    dispatch(incQuantity(product._id));
    toast.success("Increased Quantity");
  };
  const handleDecrement = () => {
    if (product.quantity > 1) {
      dispatch(decQuantity(product._id));
      toast.success("Decreased Quantity");
    } else {
      toast.success("Add Quantity");
    }
  };

  return (
    <>
      <div className="card mx-5 h-auto mb-3 rounded-0">
        <div className="row ">
          <div className="col-md-4">
            <img
              src={`${product.imageUrl + product.name}`}
              className="img-fluid h-100 "
              style={{ paddingLeft: "15px" }}
              alt={product.name}
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <span className="card-text ">
                {product.discountPercent ? (
                  <b>
                    $
                    {(
                      product.price -
                      product.price * (product.discountPercent / 100)
                    ).toFixed(2)}
                  </b>
                ) : (
                  <b>${product.price}</b>
                )}
              </span>
              <small
                className="card-text mx-3"
                style={{ textDecoration: "line-through" }}>
                {product.discountPercent && <b>${product.price}</b>}
              </small>
              <small className="card-text">
                {product.discountPercent && (
                  <b>{product.discountPercent}% OFF</b>
                )}
              </small>

              <p className="card-text my-2">
                <b>Description: </b>
                {product.description}
              </p>

              <p className="card-text my-2">
                <b>Availability: </b>
                {product.availability ? "In Stock" : "Out of Stock"}
              </p>

              {isCart && (
                <>
                  <span className="card-text my-2">
                    <b>Quantity: </b>
                    <button
                      onClick={handleDecrement}
                      className="mx-3  py-0 btn btn-light fs-5 fw-semibold rounded-circle">
                      -
                    </button>
                    <span className="fs-6 fw-semibold border  border-black m-0 py-0 px-3">
                      {product.quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="mx-3 px-2 py-0 btn btn-light fs-5 fw-semibold rounded-circle">
                      +
                    </button>
                  </span>
                </>
              )}

              <div className="mb-2 mt-4">
                {productIds.includes(product._id) ? (
                  <>
                    {isCart ? (
                      <button
                        onClick={() => removeFromCartHandler(product._id)}
                        className="btn btn-secondary w-100  fw-semibold">
                        Remove from Cart
                      </button>
                    ) : (
                      <button className="btn btn-secondary w-100  fw-semibold">
                        <Link to="/cart" className="nav-link">
                          Go to Cart
                        </Link>
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => addToCartHandler(product)}
                    className="btn btn-secondary w-100  fw-semibold">
                    Add to Cart
                  </button>
                )}
              </div>
              <div>
                {wishlistProductIds.includes(product._id) ? (
                  <button
                    onClick={() => removeFromWishlistHandler(product)}
                    className="btn btn-info w-100  fw-semibold">
                    Remove from Wishlist
                  </button>
                ) : (
                  <button
                    onClick={() => addToWishlistHandler(product)}
                    className="btn btn-info w-100  fw-semibold">
                    Add to Wishlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default ProductCard;
