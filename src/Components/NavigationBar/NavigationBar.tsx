import "./NavigationBar.css";
import {  useNavigate, useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="component-navigation flex-end-space-betw">
      <div className="navigation-pri-part">
        <div className="logo-container">
          <img
            src={require("./../../Assets/Images/50px-50px.png")}
            alt="Beautiful piston"
          />
        </div>
        <a>
          <h1 className="text-shadow">
     
            PISTON <span className="text-accent">Quiz</span>
          </h1>
        </a>
      </div>
      <div className="navigation-end-part">
        {/* {todo} */}
        {/* {location.pathname === "/authentication" ? (
          <button className="btn btn-outline-pri" onClick={() => navigate("/")}>
            Home
          </button>
        ) : (
          <button
            className="btn btn-outline-pri"
            onClick={() => navigate("/authentication")}
          >
            Login
          </button>
        )} */}
        
      </div>
    </nav>
  );
};
