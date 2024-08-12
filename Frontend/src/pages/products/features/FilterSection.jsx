import React from "react";

const FilterSection = ({ products }) => {
  const categories =
    products && products.map((prod) => prod.categories.subCategory);

  const filterCategories = () => {
    const filtered = [];
    if (categories && categories.length > 0) {
      for (let i = 0; i < categories.length; i++) {
        if (!filtered.includes(categories[i])) {
          filtered.push(categories[i]);
        }
      }
    }

    return filtered;
  };

  const filteredCategories = filterCategories();

  return (
    <>
      <div className="px-3">
        <div className=" d-flex justify-content-between">
          <h5>Filters</h5>
          <div>
            <button className="btn btn-light fw-semibold">Clear</button>
          </div>
        </div>
        <div className="mt-4">
          <h6>Price</h6>
          <input
            className="form-range bg-light"
            type="range"
            min={10}
            max={1000}
            step={0.5}
          />
          <div className="d-flex justify-content-between">
            <label>10</label>
            <label>1000</label>
          </div>
        </div>
        <div className="mt-4">
          <h6>Category</h6>
          <div>
            {categories &&
              filteredCategories &&
              filteredCategories.map((cat) => (
                <div key={cat}>
                  <label htmlFor={cat}>
                    <input id={cat} type="checkbox" value={cat} /> {cat}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
