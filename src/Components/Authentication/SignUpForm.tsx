import React, { useState } from "react";
import { useAppDispatch } from "Redux/hooks";
import "./authentication.css";
import { Link } from "react-router-dom";
import { signUp } from "Redux/Reducers/AuthSlice";

const SignUpForm = () => {
  const dispatch: any = useAppDispatch();
  const [viewPassword, setViewPassword] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
  });
  function signUpHandler(e: any) {
    e.preventDefault();
    dispatch(signUp(details));
  }
  return (
    <form className="form flex-column-center no-border width-38 text-p card-shadow">
      <h1 className="text-black">Sign-Up</h1>

      <input
        type="text"
        name="full-name"
        className="form-input text-p"
        placeholder="Enter Your full name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
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
        className="btn btn-outline-pri form-btn smooth-square-radius "
        onClick={(e) => {
          signUpHandler(e);
        }}
      >
        Sign-Up
      </button>
      <Link to="/authentication" className="link-btn">
        Already have a account{" "}
        <i className="fas fa-chevron-right text-accent"></i>
      </Link>
    </form>
  );
};

export default SignUpForm;
