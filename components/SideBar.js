import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    const sidebarLinks = [
      { id: 1, name: "Bedroom" },
      { id: 2, name: "Dinning Room" },
      { id: 3, name: "Meeting Room" },
      { id: 4, name: "Workspace" },
      { id: 5, name: "Living Room" },
      { id: 6, name: "Kitchen" },
      { id: 7, name: "Living Space" },
    ];

    return (
      <div className="container-fluid mx-3" style={{ position: "relative", left: "100px" }}>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "280px" }}>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto px-4  my-4">
            {sidebarLinks.map((link) => (
              <li className="p-3" key={link.id}>
                <a href="/" className="nav-link link-body-emphasis">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <hr />
          <button type="button" className="btn btn-success btn-lg ms-4 mb-4">
            All categories <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
