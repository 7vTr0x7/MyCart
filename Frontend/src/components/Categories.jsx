import React from "react";

const Categories = ({ categories }) => {
  return (
    <>
      <div className="row text-center">
        {categories &&
          categories.map((category) => (
            <div key={category.name} className="col-md-3">
              <button className="btn btn-light">{category.name}</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
