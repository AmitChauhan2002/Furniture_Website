import React, { Component } from "react";
import inwood from "../assets/footer/inwood.svg";
import apps from "../assets/footer/app.svg";

export default class Footer extends Component {
  render() {
    const footerItemStyle = {
      color: "#07484A",
    };

    const accountLinks = ["Sign In", "Register", "Order status"];
    const helpLinks = ["Shipping", "Returns", "Sizing"];
    const shopLinks = ["All Products", "Bedroom", "Dining Room"];

    return (
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-1 my-5">
          <div className="col mb-3">
            <img src={inwood} alt="inwood" />
            <br />
            <div className="mt-4">
              <img src={apps} alt="apps" />
            </div>
            <div className="mt-3" style={footerItemStyle}>
              <p>
                <strong>Address</strong>
              </p>
              <p>+123 456 789</p>
              <p>877 The Bronx, NY</p>
              <p>14568, USA</p>
            </div>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5 style={footerItemStyle}>My Account</h5>
            <ul className="nav flex-column">
              {accountLinks.map((link) => (
                <li key={link} className="nav-item mb-2 my-2" style={footerItemStyle}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="col mb-3">
            <h5 style={footerItemStyle}>Help</h5>
            <ul className="nav flex-column">
              {helpLinks.map((link) => (
                <li key={link} className="nav-item mb-2" style={footerItemStyle}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="col mb-3">
            <h5 style={footerItemStyle}>Shop</h5>
            <ul className="nav flex-column">
              {shopLinks.map((link) => (
                <li key={link} className="nav-item mb-2" style={footerItemStyle}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
