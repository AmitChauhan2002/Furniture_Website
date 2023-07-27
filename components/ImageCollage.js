import React from "react";
import image1 from "../assets/medium_Image/001.svg";
import image2 from "../assets/medium_Image/002.svg";
import image3 from "../assets/medium_Image/003.svg";
import image4 from "../assets/medium_Image/004.svg";
import image5 from "../assets/medium_Image/005.svg";
import image6 from "../assets/medium_Image/006.svg";

export default function ImageCollage() {
  const images = [image1, image2, image3, image4, image5, image6];
  const rows = 3;
  const cols = 2;

  return (
    <div>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="row p-3" style={{ marginLeft: "20%" }}>
          {images.slice(rowIndex * cols, rowIndex * cols + cols).map((image, colIndex) => (
            <div key={colIndex} className="col-md-4">
              <div className="text-center img-fluid">
                <img
                  src={image}
                  className="rounded"
                  alt={`Image ${rowIndex * cols + colIndex + 1}`}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
