import React, { Component } from "react";
import girl from "../assets/testimonial/girl.svg";

export default class Testimonials extends Component {
  render() {
    const testimonialTextStyle = {
      color: "#07484A",
    };

    return (
      <div style={{ margin: "30px", marginTop: "50px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{fontSize:"60px",color:"#07484A"}}>Testimonials</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h4 style={{fontSize:"30px",color:"#07484A"}}>Over 1500 happy customers</h4>
          </div>
          <div className="card mb-3 mt-5" style={{ maxWidth: "2000px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={girl} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body mt-5">
                  <h3 className="card-text" style={testimonialTextStyle}>
                    “My experience with Mark is a complete success, from customer
                    service, wide range of products, clean store, purchasing
                    experience, the newsletter. Thank you.”
                  </h3>
                  <div style={{ marginTop: "60px" }}>
                    <h4 style={testimonialTextStyle}>Leona Paul <br /> CEO of FLOAT.COM</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
