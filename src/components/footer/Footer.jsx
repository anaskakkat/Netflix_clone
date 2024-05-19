import React from "react";
import "./footer.css";
import youtub_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <img src={youtub_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privecy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright_text">c 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
