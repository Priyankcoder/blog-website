import React, { useEffect, useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import "./BlogContainer.css";
import hacker from "../../images/hacker.jpg";
import { AuthContext } from "../../Auth.js";
import {Link} from 'react-router-dom';
const BlogsCard = ({ key, firstName, lastName, title, content, timeStamp }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h4>{title.slice(2)}</h4>
        <div className="card-prop">
          <p>{timeStamp}&nbsp;|</p>
          <p>
            &nbsp;by&nbsp;{firstName} {lastName}
          </p>
        </div>
        <div className="card-txt">
          <p>{content.slice(2, 300)}</p>
        </div>
      </div>
    </div>
  );
};
const BlogsContainer = () => {
  let {currentUser, blogObjects} = useContext(AuthContext)
  const CardView = () => {
    let arr = Object.keys(blogObjects).map((key) => {
      return (
        <Link to={{pathname: `/blog/${key}`}} className="link">
          <BlogsCard
            key={key}
            firstName={blogObjects[key].firstName}
            lastName={blogObjects[key].lastName}
            title={blogObjects[key].title}
            content={blogObjects[key].content}
            timeStamp={blogObjects[key].timeStamp}
          ></BlogsCard>
        </Link>
      );
    });
    return arr;
  };
  return (
    <div>
      {/* {cardView} */}
      {/* Hello */}
      <CardView></CardView>
    </div>
  );
};

export default BlogsContainer;
