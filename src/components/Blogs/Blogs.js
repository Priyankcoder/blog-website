import React, { useState, useEffect, useContext } from "react";
import Login from "../Login";
import Profile from "../Profile/Profile";
import "./Blogs.css";
import { firebaseDb } from "../../firebase";
import BlogContainer from "../BlogContainer/BlogContainer";
import { Link } from "react-router-dom";
import { fire } from "../../firebase";
import { AuthContext } from "../../Auth.js";
import loadimg from "../../images/loadimg.svg";
import MediaQuery from "react-responsive";

const Blogs = () => {
  let { currentUser, blogObjects } = useContext(AuthContext);
  let user = currentUser;
  return (
    <div className="b-outer-container">
      <div className="b-inside-container">
        <MediaQuery minWidth={1025}>
          <div className="left-container">
            <Profile></Profile>
          </div>
        </MediaQuery>
        <div className="right-container">
          <div className="website-title">
            <div className="logo"></div>
            <div className="nav-button">
              {user ? (
                <>
                  <button
                    onClick={() => fire.auth().signOut()}
                    className="button"
                  >
                    LogOut
                  </button>
                  <Link to="/dashboard">
                    <button className="button" style={{marginLeft: "2vw"}}>DashBoard</button>
                  </Link>
                </>
              ) : (
                <Link to="/login">
                  <button className="button">LogIn</button>
                </Link>
              )}
            </div>
          </div>
          <div className="blog-container">
            <BlogContainer></BlogContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
