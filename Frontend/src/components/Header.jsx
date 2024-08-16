import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
          <span onClick={() => navigate("/")} className="px-3 fs-3">
            <IoBagHandleOutline />
          </span>
          <span onClick={() => navigate("/wishlist")} className="px-3 fs-4">
            <FaRegHeart />
          </span>
          <span onClick={() => navigate("/cart")} className="px-3 fs-3">
            <MdOutlineShoppingCart />
          </span>
          <span className="px-3 fs-3">
            <CgProfile />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
