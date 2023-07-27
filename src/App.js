import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import SideBar from "./components/SideBar";
import ImageCollage from "./components/ImageCollage";
import Products from "./components/Products";
import Package from "./components/Package";
import Own_creation from "./components/Own_creation";
import Features from "./components/Features";
import Testemonials from "./components/Testemonials";
import JoiningBlock from "./components/JoiningBlock";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div className="container-fluid">
          <div className="row"> 
            <div style={{ display: "flex", justifyContent: "center" }} className="my-5">
              <h1 style={{fontSize:"60px",color:"#07484A"}}>Explore by category</h1>
            </div>
            <div className="col-md-2">
              <SideBar />
            </div>
            <div className="col-md-10">
              <ImageCollage />
            </div>
          </div>
        </div>
        <Products/>
        <Package/>
        <Own_creation/>
        <Features/>
        <Testemonials/>
        <JoiningBlock/>
        <Footer/>
      </>
    );
  }
}
