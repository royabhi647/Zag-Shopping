import React from "react";
import "./custom.css";
import prev from "../assets/arrow.png";
import Bell from "../assets/bell.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import star from "../assets/star.png";
import cart from "../assets/cart.png";
import { useState } from "react";
import { addCartProduct } from "../Redux/Features/cartDataSlice";
import { useDispatch } from "react-redux";

function Details(props) {
  const location = useLocation();
  const { name, price, image } = location.state || {};
  const TshirtSize = ["S", "M", "L"];
  const [selectSize, setSelectSize] = useState("");
  const dispatch = useDispatch();

  const handleAddItemsInCart = () => {
    dispatch(
      addCartProduct({
        name,
        price,
        image,
        selectSize,
        shippingFee: 80,
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "390px",
          height: "640px",
          background: "#FFF",
          position: "relative",
        }}
      >
        <div style={{ marginLeft: "24px", marginTop: "10px", display: "flex" }}>
          <Link
            to={-1}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img src={prev} alt="" style={{ width: "24px", height: "24px" }} />
          </Link>
          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "-1.2px",
              marginLeft: "110px",
            }}
          >
            Details
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "25px",
              position: "relative",
              cursor: "pointer",
              marginLeft: "109px",
            }}
          >
            <img src={Bell} alt="" style={{ width: "24px", height: "24px" }} />
            <div
              style={{
                background: "#000",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                transform: "translate(12px,-8px)",
              }}
            >
              <p style={{ color: "#FFF" }}>1</p>
            </div>
          </div>
        </div>

        <div
          style={{ height: "540px", overflow: "auto" }}
          className="container"
        >
          <div style={{ marginLeft: "24px", marginTop: "11px" }}>
            <img
              src={image}
              alt=""
              style={{ width: "341px", height: "330px" }}
            />
          </div>
          <div style={{ marginLeft: "24px" }}>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: 400,
                letterSpacing: "-0.48px",
                marginTop: "10px",
              }}
            >
              {name}
            </p>
            <div style={{ display: "flex", marginTop: "8px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={star}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    fontFamily: "General Sans",
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "-0.32px",
                    marginLeft: "5px",
                  }}
                >
                  4.5/5
                </p>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.60)",
                    fontFamily: "General Sans",
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "-0.32px",
                  }}
                >
                  &nbsp;(45 reviews)
                </p>
              </div>
            </div>
          </div>

          <p
            style={{
              color: "rgba(0, 0, 0, 0.60",
              marginTop: "10px",
              marginLeft: "24px",
              fontFamily: "Inter",
              fontSize: "17px",
              fontWeight: 400,
              letterSpacing: "0.68px",
              marginRight: "25px",
            }}
          >
            The name says it all, the right size slightly snugs the body leaving
            enough room for comfort in the sleeves and waist.
          </p>

          <div style={{ marginLeft: "24px", marginTop: "5px" }}>
            <h1
              style={{ fontFamily: "Inter", fontSize: "21px", fontWeight: 500 }}
            >
              Choose size
            </h1>
            <div style={{ display: "flex" }}>
              {TshirtSize.map((size) => (
                <div
                  style={{
                    width: "50px",
                    height: "47px",
                    background: size === selectSize ? "#F2F2F2" : "#FFF",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(0, 0, 0, 0.20)",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectSize(size)}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {size}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            width: "390px",
            height: "62px",
            borderTop: "1px solid rgba(0, 0, 0, 0.20)",
            position: "absolute",
            bottom: "0%",
            display: "flex",
            position: "relative",
          }}
        >
          <div style={{ marginLeft: "24px", marginTop: "10px" }}>
            <p
              style={{
                fontFamily: "General Sans",
                color: "rgba(0, 0, 0, 0.60)",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Price
            </p>
            <h1
              style={{ fontFamily: "Inter", fontSize: "24px", fontWeight: 400 }}
            >
              INR &nbsp;{price}
            </h1>
          </div>
          <Link
            to={"/cart"}
            style={{
              textDecoration: "none",
              background: "#000",
              display: "flex",
              height: "50px",
              width: "auto",
              alignItems: "center",
              borderRadius: "10px",
              marginTop: "7px",
              position: "absolute",
              right: "25px",
              cursor: "pointer",
            }}
            onClick={handleAddItemsInCart}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px 17px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <img src={cart} style={{ width: "24px", height: "24px" }} />
              </div>
              <p
                style={{
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Add to Cart
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
