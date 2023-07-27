import React, { Component } from "react";
import bigImage from "../assets/JoinBlock/bigImage.svg";
export default class JoiningBlock extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src={bigImage} alt="" width={"100%"} />
          </div>
          <div className="col-md-6" style={{ backgroundColor: "#E0F6F1" }}>
            <div style={{ marginTop: "150px", marginLeft: "50px" }}>
              <h1>
                Join Our <br /> <strong>News Letter</strong>
              </h1>
              <p>Receive exclusive deals, discounts and many offers.</p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-lg btn-success">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
