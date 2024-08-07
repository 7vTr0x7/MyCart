import React from "react";

const ProductsSection = ({ products }) => {
  return (
    <div className="bg-body-tertiary py-4 px-5 ">
      <p>
        <b>Showing All Products</b> ( showing {products && products.length}{" "}
        products )
      </p>

      <div className="row">
        {products &&
          products.map((prod) => (
            <div key={prod._id} className="col-md-3">
              <div className="card rounded-0 mt-2">
                <div className="">
                  <img
                    className="img-fluid h-50 w-100"
                    alt={prod.name}
                    src={`${prod.imageUrl}${prod.name}`}
                  />
                </div>
                <div className="card-body p-0 text-center">
                  <div>
                    <small className="px-0 py-2 m-0">
                      <b>{`${
                        prod.name.length > 10
                          ? `${prod.name.slice(0, 10)} ...`
                          : prod.name
                      }`}</b>
                    </small>
                    <p className="px-0 pt-1 pb-3  m-0">
                      <b>${prod.price}</b>
                    </p>
                  </div>
                  <div className="sticky-bottom">
                    <button className="btn btn-outline-secondary rounded-0 w-100   fw-bold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsSection;
