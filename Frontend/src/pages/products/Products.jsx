import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductsSection from "./features/ProductsSection";

const Products = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  const location = useLocation();
  const { category } = location.state || {};

  const products = useFetchProducts();

  useEffect(() => {
    const productsArray = category
      ? products?.data?.products.filter(
          (prod) => prod.categories.category === category
        )
      : products?.data?.products;

    setProductsData(productsArray);
    setAllProductsData(productsArray);
    productsArray;
  }, [products, category]);

  const clearFilterHandler = () => {
    setPriceRange("");
    setSelectedSubCategory([]);
    setRating("");
    setProductsData(allProductsData);
  };

  const categories =
    allProductsData &&
    allProductsData.map((prod) => prod.categories.subCategory);

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

  const filterProductsHandler = (categories, price, rating) => {
    let filtered = [];

    if (categories.length === 0) {
      filtered = allProductsData;
    } else {
      filtered = allProductsData.filter((prod) =>
        categories.includes(prod.categories.subCategory)
      );
    }

    if (rating) {
      filtered = filtered.filter((prod) => prod.rating >= Number(rating));
    }

    if (price) {
      filtered = filtered.filter((prod) => prod.price < price);
    }

    setProductsData(filtered);
  };
  const handlePriceRange = (e) => {
    const price = e.target.value;
    setPriceRange(price);
    filterProductsHandler(selectedSubCategory, price, rating);
  };

  const categoryChangeHandler = (e) => {
    const { value, checked } = e.target;

    let updatedCategories = [...selectedSubCategory];
    if (checked) {
      updatedCategories.push(value);
    } else {
      updatedCategories = updatedCategories.filter((cat) => cat != value);
    }

    setSelectedSubCategory(updatedCategories);
    filterProductsHandler(updatedCategories, priceRange, rating);
  };

  const handleRating = (e) => {
    const { value } = e.target;
    setRating(value);
    filterProductsHandler(selectedSubCategory, priceRange, value);
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
                  <button
                    className="btn btn-light fw-semibold"
                    onClick={clearFilterHandler}>
                    Clear
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6>Price</h6>
                <input
                  className="form-range bg-light"
                  type="range"
                  min={10}
                  max={2000}
                  step={0.5}
                  value={priceRange || 10}
                  onChange={handlePriceRange}
                />
                <div className="d-flex justify-content-between">
                  <label>{priceRange || 10}</label>
                  <label>2000</label>
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
                          <input
                            id={cat}
                            type="checkbox"
                            checked={selectedSubCategory.includes(cat)}
                            value={cat}
                            onChange={categoryChangeHandler}
                          />{" "}
                          {cat}
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
                        value={4}
                        checked={rating === "4"}
                        onChange={handleRating}
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
                        value={3}
                        checked={rating === "3"}
                        onChange={handleRating}
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
                        value={2}
                        checked={rating === "2"}
                        onChange={handleRating}
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
                        value={1}
                        checked={rating === "1"}
                        onChange={handleRating}
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
