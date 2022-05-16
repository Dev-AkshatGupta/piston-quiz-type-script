import "./authentication-page.css";
import { Outlet } from "react-router-dom";

const AuthenticationPage = () => {
  return (
  <div className="flex-center height-80vh">
  <Outlet/>
  </div>)
}

export default AuthenticationPage
