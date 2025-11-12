import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-column">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Flipkart Stories</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

       =
        <div className="footer-column">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>POLICY</h4>
          <ul>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

      
        <div className="footer-column">
          <h4>SOCIAL</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

       
        <div className="footer-column contact-info">
          <h4>CONTACT US</h4>
          <p>Flipkart Internet Pvt. Ltd.</p>
          <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Bengaluru, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ support@kamleshkart.com</p>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© 2025 KamleshKart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
