
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "./../../Redux/hooks";

const RequireAuth = () => {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const location = useLocation();
  return currentUser.uid?(<Navigate to={"/"} replace state={{from : location}}/>) : (
    <Outlet />
  );
};

export default RequireAuth;

