import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: "fa-file-invoice-dollar",
      title: "Payment Method",
      description: "We offer flexible payment options, to make it easier",
    },
    {
      icon: "fa-sharp fa-box",
      title: "Return Policy",
      description: "You can return a product within 30 days",
    },
    {
      icon: "fa-headset",
      title: "Customer Support",
      description: "Our customer support is 24/7",
    },
  ];

  return (
    <div className="container-fluid" style={{ backgroundColor: "#E0EFF6" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "100px", paddingTop: "50px" }}>
          <h1 style={{fontSize:"50px"}}>Benefits for your expediency</h1>
        </div>
        <div className="row" style={{ textAlign: "center", paddingBottom: "30px" }}>
          {featuresData.map((feature, index) => (
            <div className="col-lg-4" key={index}>
              <i className={`fa-solid ${feature.icon} fa-fade fa-4x`} style={{ margin: "7% 15%" }}></i>
              <h3 style={{ fontWeight: "bolder" }}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
