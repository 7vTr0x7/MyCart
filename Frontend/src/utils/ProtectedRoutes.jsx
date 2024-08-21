import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { profile, status, error } = useSelector((state) => state.profile);

  return profile?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
