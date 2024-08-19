import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../pages/wishlist/wishlistSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { addToCart } from "../pages/cart/cartSlice";

const ProductCard = ({ product }) => {
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

              <div className="mb-2 mt-4">
                {productIds.includes(product._id) ? (
                  <button className="btn btn-secondary w-100  fw-semibold">
                    <Link to="/cart" className="nav-link">
                      Go to Cart
                    </Link>
                  </button>
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
