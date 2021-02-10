import React from "react";
import prof from "../../images/prof.jpeg";
import style from './Profile.css'
const Profile = () => (
  <div className="profile">
    <div className="author-name">
      <h3>Algo-Shot</h3>
    </div>
    <div className="author-image"></div>
    <div className="author-intro">
      <p>
        Hi 👋, Myself Priyank. I like to learn and write about coding algos.
      </p>
    </div>
    <div className="social-media">
      <a href="https://www.instagram.com/curious_priyank/">
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a href="https://github.com/Priyankcoder">
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/priyankcoder/">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
    </div>
  </div>
);

export default Profile;
