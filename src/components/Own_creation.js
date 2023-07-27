import React, { Component } from "react";
import image1 from "../assets/Own-creation/image1.svg"
import image2 from "../assets/Own-creation/image2.svg"
import image3 from "../assets/Own-creation/image3.svg"

export default class own_creation extends Component {
  render() {
    const box1 = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#70908B",
      borderRadius: "15px",
      color: "white",
      height: "503px",
    };
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 p-5 mt-5" style={box1}>
                <div>
                  <h1>Our own Creation</h1>
                  <p>Designed in our studios</p>
                  <p>
                    More
                    <i
                      className="fa-sharp fa-solid fa-arrow-left"
                      style={{ padding: "7px" }}
                    ></i>
                    <i
                      className="fa-sharp fa-solid fa-arrow-right"
                      style={{ padding: "7px" }}
                    ></i>
                  </p>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="col-md-3 mt-5">
                <div style={{position:"relative",left:"20px"}}>
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className="col-md-3 mt-5">
                <div>
                    <img style={{borderRadius: "15px"}} src={image3} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
