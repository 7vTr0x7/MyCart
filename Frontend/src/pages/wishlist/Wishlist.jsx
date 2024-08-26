import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import toast, { Toaster } from "react-hot-toast";
import { useFetchProductsByIds } from "../../hooks/useFetchProductsByIds";
import { addProductsToWishlist, readWishlist } from "./wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const wishlistProductIds = useSelector(
    (state) => state.wishlist.wishlistProductIds
  );
  const profile = useSelector((state) => state.profile.profile);

  const { _id } = profile;

  const products = useFetchProductsByIds(wishlistProductIds);

  useEffect(() => {
    if (products.length > 0) {
      dispatch(addProductsToWishlist(products));
    }
  }, [wishlistProductIds]);

  useEffect(() => {
    dispatch(readWishlist(_id));
  }, [_id, wishlistProductIds.length]);

  return (
    <>
      <Header />
      <main className="container my-4">
        <p className="text-center fs-4  fw-bold">My Wishlist</p>
        {wishlist.length === 0 && (
          <p className="text-center fs-6  fw-bold">Wishlist is Empty</p>
        )}
        <div className="row mt-2 mb-3">
          {wishlist &&
            wishlist.length > 0 &&
            wishlist.map((prod) => (
              <div key={prod._id} className="col-md-3 mt-3">
                <div className="card">
                  <Card prod={prod} />
                </div>
              </div>
            ))}
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default Wishlist;
