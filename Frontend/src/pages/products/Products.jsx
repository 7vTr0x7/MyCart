import React from "react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductsSection from "./features/ProductsSection";

const Products = () => {
  const location = useLocation();
  const { category } = location.state || {};

  const products = useFetchProducts();
  const productsData = category
    ? products?.data?.products.filter(
        (prod) => prod.categories.category === category
      )
    : products?.data?.products;

  const categories =
    productsData && productsData.map((prod) => prod.categories.subCategory);

  const filterSubCategories = () => {
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

  const filteredSubCategories = filterSubCategories();

  const handlePriceRange = (e) => {
    const price = e.target.value;
    const filtered = productsData.filter((prod) => prod.price <= price);
  };

  return (
    <>
      <Header />
      <main>
        <div className="row ">
          <div className="col-md-3">
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
                  onChange={handlePriceRange}
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
                    filteredSubCategories &&
                    filteredSubCategories.map((cat) => (
                      <div key={cat}>
                        <label htmlFor={cat}>
                          <input id={cat} type="checkbox" value={cat} /> {cat}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mt-4">
                <h6>Rating</h6>
                <div>
                  <div>
                    <label htmlFor="4">
                      <input
                        type="radio"
                        name="rating"
                        id="4"
                        value={"4 stars & above"}
                      />{" "}
                      {"4 stars & above"}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="3">
                      <input
                        type="radio"
                        name="rating"
                        id="3"
                        value={"3 stars & above"}
                      />{" "}
                      {"3 stars & above"}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="2">
                      <input
                        type="radio"
                        name="rating"
                        id="2"
                        value={"2 stars & above"}
                      />{" "}
                      {"2 stars & above"}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="1">
                      <input
                        type="radio"
                        name="rating"
                        id="1"
                        value={"1 star & above"}
                      />{" "}
                      {"1 star & above"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h6>Sort by</h6>
                <div>
                  <div>
                    <label htmlFor="low">
                      <input
                        type="radio"
                        name="sortBy"
                        id="low"
                        value={"low"}
                      />{" "}
                      {"Price - Low to High"}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="high">
                      <input
                        type="radio"
                        name="sortBy"
                        id="high"
                        value={"high"}
                      />{" "}
                      {"Price - High to Low"}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <ProductsSection products={productsData} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
