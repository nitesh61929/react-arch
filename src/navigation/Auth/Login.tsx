import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      This is Login Page
      <button>Login</button>
    </Fragment>
  );
};

export default Login;
