import React from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../wishlist/wishlistSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const wishlistProductIds = useSelector(
    (state) => state.wishlist.wishlistProductIds
  );

  const prodId = useParams();

  const product = products.find((prod) => prodId.prodId == prod._id);

  const addToWishlistHandler = (id) => {
    dispatch(addToWishlist(id));
    toast.success("Added to wishlist");
  };

  const removeFromWishlistHandler = (id) => {
    dispatch(removeFromWishlist(id));
    toast.success("Removed From wishlist");
  };

  return (
    <>
      <Header />
      <main
        className="d-flex align-items-center justify-content-center"
        style={{ height: "60vh" }}>
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
            <div className="card">
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
                      <button className="btn btn-secondary w-100 fw-semibold">
                        Add To Cart
                      </button>
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
            </div>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default ProductDetails;
