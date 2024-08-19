import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <>
      <div className="row text-center">
        {categories ? (
          categories.map((category) => (
            <div key={category.name} className="col-md-3">
              <button className="btn btn-light">
                <Link
                  to="/products"
                  className="nav-link"
                  state={{ category: category.name }}>
                  {category.name}
                </Link>
              </button>
            </div>
          ))
        ) : (
          <p className="container text-center col-md-1 btn btn-light">
            Loading
          </p>
        )}
      </div>
    </>
  );
};

export default Categories;
