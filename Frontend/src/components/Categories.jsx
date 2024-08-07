import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <>
      <div className="row text-center">
        {categories &&
          categories.map((category) => (
            <div key={category.name} className="col-md-3">
              <button className="btn btn-light">
                <Link
                  to="/products"
                  className="nav-link"
                  state={{ state: category.name }}>
                  {category.name}
                </Link>
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
