import React, { useState, useEffect, useContext, useCallback } from "react";
import { fire } from "../firebase";
import { useForm } from "react-hook-form";
import { UserContext } from "../userContext";
import { AuthContext } from "../Auth.js";
import { withRouter, Redirect } from "react-router";
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (data) => {
      console.log(data);
      const { email, password } = data;
      try {
        await fire.auth().signInWithEmailAndPassword(email, password);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <form onSubmit={handleSubmit(handleLogin)} style={{display: "flex", width: "70vw", height: "270px", flexDirection: "column", marginLeft: "auto", marginRight: "auto", marginTop: "20vh", justifyContent: "space-between"}}>
      <div className="form-group-row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="email"
            name="email"
            ref={register({ required: "Email Required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>
      <div className="form-group-row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          password
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="password"
            name="password"
            ref={register({ required: "Password Required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      </div>
      <button type="submit" style={{width: "20vh", height: "5vh"}}>Login</button>
    </form>
  );
};

export default Login;
