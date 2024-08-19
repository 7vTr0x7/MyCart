import React from "react";

import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import {
  addToWishlist,
  removeFromWishlist,
} from "../pages/wishlist/wishlistSlice";
import { addToCart } from "../pages/cart/cartSlice";

const Card = ({ prod }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistProductIds = useSelector(
    (state) => state.wishlist.wishlistProductIds
  );
  const productIds = useSelector((state) => state.cart.productIds);

  const addToWishlistHandler = (id) => {
    dispatch(addToWishlist(id));
    toast.success("Added to wishlist");
  };

  const removeFromWishlistHandler = (id) => {
    dispatch(removeFromWishlist(id));
    toast.success("Removed From wishlist");
  };

  const addToCartHandler = (prod) => {
    dispatch(addToCart(prod));
    toast.success("Added to Cart");
  };

  return (
    <>
      <div>
        {wishlistProductIds.includes(prod._id) ? (
          <IoMdHeart
            onClick={() => removeFromWishlistHandler(prod)}
            className="fs-4 mt-2 mx-2"
            style={{
              position: "absolute",
              right: "0",
            }}
          />
        ) : (
          <CiHeart
            onClick={() => addToWishlistHandler(prod)}
            className="fs-4 mt-2 mx-2"
            style={{
              position: "absolute",
              right: "0",
            }}
          />
        )}
        <img
          className="img-fluid card-img-top"
          style={{ cursor: "pointer" }}
          alt={prod.name}
          src={`${prod.imageUrl}${prod.name}`}
          onClick={() => navigate(`/productDetails/${prod._id}`)}
        />
        <small
          style={{
            position: "absolute",
            bottom: "7rem",
            right: "10px",
            backgroundColor: "gray",
            color: "white",
            padding: "4px",
            borderRadius: "5px",
          }}>
          {`${prod.rating}`}
        </small>
      </div>
      <div className="card-body p-0 text-center">
        <div>
          <p className="px-0 pt-2 m-0">
            <b>{`${
              prod.name.length > 15
                ? `${prod.name.slice(0, 15)} ...`
                : prod.name
            }`}</b>
          </p>
          <p>
            <span className="px-0 pt-1 mx-2">
              <b>
                {prod.discountPercent
                  ? `$${(
                      prod.price -
                      prod.price * (prod.discountPercent / 100)
                    ).toFixed(2)}`
                  : `$${prod.price}`}
              </b>
            </span>
            <small
              className=" pt-1 m-0"
              style={{ textDecoration: "line-through" }}>
              <b>{prod.discountPercent && `$${prod.price}`}</b>
            </small>
          </p>
        </div>
        <div className="sticky-bottom">
          {prod.availability ? (
            <>
              {productIds.includes(prod._id) ? (
                <button className="btn btn-secondary rounded-0 w-100 border-0  fw-bold">
                  <Link to="/cart" className="nav-link">
                    Go to Cart
                  </Link>
                </button>
              ) : (
                <button
                  onClick={() => addToCartHandler(prod)}
                  className="btn btn-secondary rounded-0 w-100 border-0  fw-bold">
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <p className="btn btn-info m-0 rounded-0 w-100 border-0  fw-bold">
              Out of Stock
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;