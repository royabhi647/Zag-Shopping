import React from "react";
import "./custom.css";
import { Link } from "react-router-dom";

import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.jpg";
import Image8 from "../assets/image8.jpg";

function AllProducts() {
  const allTShirts = [
    { image: Image1, name: "Regular fit slogan", price: 1100 },
    { image: Image2, name: "Regular fit polo", price: 1300 },
    { image: Image3, name: "Regular fit color block", price: 1690 },
    { image: Image4, name: "Regular fit v-neck", price: 1290 },
    { image: Image5, name: "Cotton candy", price: 1350 },
    { image: Image6, name: "Mint monkey", price: 899 },
    { image: Image7, name: "Feel the fear", price: 999 },
    { image: Image8, name: "Love for music", price: 1272 },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "390px",
        height: "400px",
        overflow: "auto",
      }}
      className="container"
    >
      {allTShirts.map((tshirt, index) => (
        <div key={index} style={{ marginRight: "19px", cursor: "pointer" }}>
          <Link
            to={"/details"}
            state={{
              name: tshirt.name,
              price: tshirt.price,
              image: tshirt.image,
            }}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div style={{ width: "161px", height: "174px" }}>
              <img
                src={tshirt.image}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "-0.32px",
                marginTop: "8px",
              }}
            >
              {tshirt.name}
            </p>
            <p
              style={{
                color: "rgba(0, 0, 0, 0.60)",
                marginTop: "6px",
                marginBottom: "19px",
              }}
            >
              INR {tshirt.price}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
