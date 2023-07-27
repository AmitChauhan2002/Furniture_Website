import React, { Component } from 'react';
import headerImage from "../assets/header.svg";

export default class Header extends Component {
  render() {
    const headerTextStyles = {
      position: "absolute",
      right: "60%",
      height: '400px',
      width: '700px',
      color: 'rgb(9, 65, 9)',
      zIndex: "1",
    };
    
    const chair = {
      width: "100%",
      height: "950px",
      backgroundImage: `url(${headerImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "0 0 62px 62px", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center", 
      zIndex:"-1",
    };

    return (
      <div>
        <div style={chair}>
          <div className="title-row-text text-body-success" style={headerTextStyles}>
            <h1 style={{fontSize:"70px",color:"#07484A"}}>
              Exclusive Deals of Furniture Collection
            </h1>
            <p style={{fontSize:"30px",color:"#07484A"}}>
              Explore different categories. Find the best deals.
            </p>
            <button type="button" className="btn btn-success btn-lg">Shop Now</button>
          </div>
        </div>
      </div>
    );
  }
}
