import React from "react";
import Navbar from "../components/Navbar";

const Login = (props) => {



  return (
    <>
      <Navbar currentPage="login" />
      <main className="container flex-row login-heading">
        <h1> You don't have to login, Hoff is Bringing this to you free</h1>
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header login-color p-2">Login</h4>
            <div className="card-body"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
