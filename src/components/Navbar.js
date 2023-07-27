import React, { Component } from "react";
import logo from "../assets/Logo.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";

export default class Navbar extends Component {
  render() {
    const navigationItems = [
      { label: "Home", link: "#" },
      { label: "Products", link: "#" },
      { label: "Categories", link: "#" },
      { label: "About", link: "#" },
      { label: "Contact Us", link: "#" },
    ];

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt="Inwood" />
          <div className="navbar-collapse justify-content-center" id="navbarSupportedContent">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between" style={{ color: "green" }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navigationItems.map((item, index) => (
                  <li key={index} className="nav-item mx-1">
                    <a className="nav-link" href={item.link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container-sm d-flex justify-content-end" style={{ width: "auto" }}>
          <img src={cart} alt="" className="mx-3" />
          <img src={profile} alt="" className="mx-3" />
          <img src={search} alt="" className="mx-3" />
        </div>
      </nav>
    );
  }
}
