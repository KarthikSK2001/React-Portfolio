import React from "react";
import logo from "../../assets/mypic.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2023 Created With 💙 By Karthik.S</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
