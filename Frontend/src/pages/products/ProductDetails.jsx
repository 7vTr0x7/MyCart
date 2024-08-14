import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useSelector((state) => state.products.products);

  const prodId = useParams();

  const product = products.find((prod) => prodId.prodId == prod._id);

  return (
    <>
      <Header />
      <main
        className="d-flex align-items-center justify-content-center"
        style={{ height: "50vh" }}>
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="row ">
                <div className="col-md-4 w-auto">
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

                    <div className="mb-2 mt-4">
                      <button className="btn btn-secondary w-100">
                        Add To Cart
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-info w-100">
                        Add To Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
