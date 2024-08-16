import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../wishlist/wishlistSlice";

import toast, { Toaster } from "react-hot-toast";
import { addToCart, removeFromCart } from "../../cart/cartSlice";

const ProductsSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.filteredProducts);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);

  const addToWishlistHandler = (id) => {
    dispatch(addToWishlist(id));
    toast.success("Added to wishlist");
  };

  const removeFromWishlistHandler = (id) => {
    dispatch(removeFromWishlist(id));
    toast.success("Removed From wishlist");
  };

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
    toast.success("Added to Cart");
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Removed From Cart");
  };

  return (
    <div className="bg-body-tertiary py-4 px-5 mx-3">
      <p>
        <b>Showing All Products</b> ( showing {products && products.length}{" "}
        products )
      </p>

      <div className="row">
        {products.length > 0 &&
          products.map((prod) => (
            <div key={prod._id} className="col-md-3">
              <div className="card rounded-0 mt-3 ">
                <div>
                  {wishlist.includes(prod._id) ? (
                    <IoMdHeart
                      onClick={() => removeFromWishlistHandler(prod._id)}
                      className="fs-4 mt-2 mx-2"
                      style={{
                        position: "absolute",
                        right: "0",
                      }}
                    />
                  ) : (
                    <CiHeart
                      onClick={() => addToWishlistHandler(prod._id)}
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
                        {cart.includes(prod._id) ? (
                          <button className="btn btn-secondary rounded-0 w-100 border-0  fw-bold">
                            <Link to="/cart" className="nav-link">
                              Go to Cart
                            </Link>
                          </button>
                        ) : (
                          <button
                            onClick={() => addToCartHandler(prod._id)}
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
              </div>
            </div>
          ))}
      </div>
      <Toaster />
    </div>
  );
};

export default ProductsSection;
