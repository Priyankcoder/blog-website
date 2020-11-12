import React from "react";
import prof from "../../images/prof.jpeg";
import style from './Profile.css'
const Profile = () => (
  <div className="profile">
    <div className="author-name">
      <h3>Anshuman's Blog</h3>
    </div>
    <div className="author-image"></div>
    <div className="author-intro">
      <p>Hi, Myself Anshuman Bhagwani. I am a hacker by profession</p>
    </div>
    <div className="social-media">
      <i class="fab fa-instagram fa-2x"></i>
      <i class="fab fa-github fa-2x"></i>
      <i class="fab fa-linkedin fa-2x"></i>
    </div>
  </div>
);

export default Profile;
