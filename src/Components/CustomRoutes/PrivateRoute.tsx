import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAppSelector } from "./../../Redux/hooks";

const PrivateRoute = () => {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const location = useLocation();
  return currentUser.uid ? (
    <Outlet />
  ) : (
    <Navigate to="/authentication" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
