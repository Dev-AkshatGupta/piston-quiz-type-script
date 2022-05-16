import React, { useState } from "react";
import { useAppDispatch } from "Redux/hooks";
import "./authentication.css";
import { Link } from "react-router-dom";
import { logIn } from "Redux/Reducers/AuthSlice";

const LogInForm = () => {
  const dispatch: any = useAppDispatch();
  const [viewPassword, setViewPassword] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  function logInHandler(details:{email:string,password:string}){

    dispatch(logIn(details));
  }
  return (
    <form className="form flex-column-center no-border width-38 text-p  card-shadow">
      <h1 className="text-black">Log-In</h1>

      <input
        type="email"
        name="email-id"
        className="form-input text-p"
        placeholder="Enter Your Email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <input
        type={!viewPassword ? "password" : "text"}
        name="password"
        className="form-input text-p"
        placeholder="Enter Your Password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />
      {!viewPassword && (
        <i
          className="fa fa-eye text-p"
          aria-hidden="true"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}
      {viewPassword && (
        <i
          className="fas fa-eye-slash text-p"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}
      <button
        className="btn btn-outline-pri form-btn smooth-square-radius"
        onClick={(e) => {
          e.preventDefault();
            logInHandler(details);
        }}
      >
        Log-In
      </button>
      <button className="btn btn-outline-pri form-btn smooth-square-radius" onClick={(e) => {
          e.preventDefault();
           
          logInHandler({password:"123456789",email:"guptaakshat105@gmail.com"});
        }}>
        Test Credentials
      </button>
      <Link to="/authentication/signUp" className="link-btn">
        Create new account <i className="fas fa-chevron-right text-accent"></i>
      </Link>
    </form>
  );
};

export default LogInForm;
