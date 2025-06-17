import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-columns">
            <div className="footer-column">
              <h2 className="footer-heading">Categories</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
                <li>
                  <Link to="/vocal">Local For Vocal</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Customer Service</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/returnpolicy">Return Policy</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Services</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/privacypolicy">Privacy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <img
                src="https://ecommerce-sk.vercel.app/pay.png"
                alt="Payment Methods"
                className="payment-img"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <Link to="/" className="footer-brand">
              E-Bharat
            </Link>
            <p className="footer-text">
              © 2023 E-bharat —
              <a
                href="https://twitter.com/knyttneve"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                www.ebharat.com
              </a>
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
