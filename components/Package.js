import React from "react";
import image1 from "../assets/package/001.svg";
import image2 from "../assets/package/002.svg";
import image3 from "../assets/package/003.svg";
import largeImage from "../assets/package/large.svg";

export default function Package() {
  const color = { color: "orange" };

  const renderCard = (image, title, price) => (
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-5">
          <img
            src={image}
            className="card-img"
            alt={title}
            style={{ position: "relative", marginTop: "5px", marginLeft: "8px" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body" style={{ color: "#336600" }}>
            <div className="row">
              <div className="col-sm-9">
                <h5 className="card-title">{title}</h5>
              </div>
              <div className="col-sm-3">
                <strong>{price}</strong>
              </div>
            </div>
            <p className="card-text">
              <span className="fa fa-star checked" style={color}></span>
              <span className="fa fa-star checked" style={color}></span>
              <span className="fa fa-star checked" style={color}></span>
              <span className="fa fa-star checked" style={color}></span>
              <span className="fa fa-star checked" style={color}></span>
            </p>
          </div>
          <a href="/" style={{ color: "green", marginLeft: "15px" }}>
            See Details
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ color: "#336600" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
        <h1 style={{ fontSize: "60px", color: "#07484A" }}>Special Package</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ width: "100%", marginTop: "40px" }}>
              <img src={largeImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="card-title" style={{ color: "#336600" }}>
                      Larkin Wood Full Set
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <button type="button" className="btn btn-success btn-sm">
                      Add to Cart
                      <i
                        className="fa-sharp fa-solid fa-cart-shopping fa-beat"
                        style={{ padding: "7px" }}
                      ></i>
                    </button>
                  </div>
                </div>
                <p className="card-text">
                  <span className="fa fa-star checked" style={color}></span>
                  <span className="fa fa-star checked" style={color}></span>
                  <span className="fa fa-star checked" style={color}></span>
                  <span className="fa fa-star checked" style={color}></span>
                  <span className="fa fa-star checked" style={color}></span>
                </p>
                <strong>$729.99</strong>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <strong>Description</strong>
            <p>
              Cast Aluminium outdoor chaise lounge as an elegant and classic touch to your outdoor space, this cast Aluminium Chaise Lounge combines the appearance, function, and quality all together, offering you the best experience.
            </p>
            {renderCard(image2, "Living Room Family Set", "$229.9")}
            {renderCard(image1, "Living Room Special Set", "$329.9")}
            {renderCard(image3, "Living Room Special Set", "$587.99")}
          </div>
        </div>
      </div>
    </div>
  );
}
