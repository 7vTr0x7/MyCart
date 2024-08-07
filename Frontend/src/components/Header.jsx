import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="row py-3">
        <div className="col-md-4 pt-2">
          <h4>
            <Link className="nav-link" to="/">
              MyCart
            </Link>
          </h4>
        </div>
        <div className="col-md-4 pt-1">
          <input type="text" placeholder={"Search"} className="form-control" />
        </div>
        <div className="col-md-4 text-end">
          <span className="px-3 fs-4">
            <FaRegHeart />
          </span>
          <span className="px-3 fs-3">
            <MdOutlineShoppingCart />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
