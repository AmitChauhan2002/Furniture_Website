import React, { Component } from "react";
import image1 from "../assets/products/chair.svg";
import image2 from "../assets/products/001.svg";
import image4 from "../assets/products/003.svg";
import image5 from "../assets/products/004.svg";

export default class Products extends Component {
  render() {
    const productsData = [
      {
        id: 1,
        image: image1,
        name: "Armchair",
        description: "Light single chair",
        price: "$145",
        background: "#CAF3E5",
      },
      {
        id: 2,
        image: image2,
        name: "Prenium Sofa",
        description: "Light single chair",
        price: "$145",
        background: "#E0EFF6",
      },
      {
        id: 3,
        image: image5,
        name: "Minimal Sofa",
        description: "Light single chair",
        price: "$145",
        background: "#EEEBFF",
      },
      {
        id: 4,
        image: image4,
        name: "Dining Chair",
        description: "Light single chair",
        price: "$145",
        background: "#FFF4E7",
      },
    ];

    const imageContainer = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
    };

    const centeredImage = {
      maxWidth: "100%",
      maxHeight: "100%",
    };

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
          <h1 style={{fontSize:"60px",color:"#07484A"}} >Popular Products</h1>
        </div>
        <div className="container" style={{ zIndex: "1" }}>
          <div className="row">
            {productsData.map((product) => (
              <div className="col-lg-3 col-md-3 col-sm-6" key={product.id}>
                <div
                  className="card"
                  style={{ height: "350px", backgroundColor: product.background }}
                >
                  <div style={imageContainer}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "100%", width: "86%", ...centeredImage }}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <p>
                        <strong>{product.price}</strong>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ margin: "50px", backgroundColor: "green" }}
              >
                Explore All items <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
