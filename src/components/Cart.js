import React from "react";
import { Link } from "react-router-dom";
import prev from "../assets/arrow.png";
import Bell from "../assets/bell.png";
import RightArrow from "../assets/rightArrow.png";
import { useSelector } from "react-redux";
import CommonCard from "./CommonCard";
import "./custom.css";

function Cart() {
  const cartData = useSelector((state) => state.cartDataItems.cartProduct);
  console.log("cartData", cartData);
  const subTotal = cartData.reduce((accu, items) => accu + items.total, 0);
  console.log(subTotal);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "390px", height: "640px", background: "#FFF" }}>
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
              marginLeft: "100px",
            }}
          >
            My Cart
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
          style={{
            marginTop: "20px",
            marginLeft: "24px",
            height: "250px",
            overflow: "auto",
          }}
          className="container"
        >
          {cartData.length > 0 &&
            cartData.map((item) => <CommonCard item={item} />)}
        </div>

        {cartData.length > 0 ? (
          <div
            style={{ marginLeft: "24px", position: "absolute", bottom: "2%" }}
          >
            <div
              style={{
                width: "341px",
                height: "53px",
                borderRadius: "10px",
                background: "rgba(0, 0, 0, 0.05)",
                marginTop: "30px",
              }}
            >
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.60)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  paddingTop: "15px",
                  marginLeft: "20px",
                }}
              >
                Add a Voucher
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <p>Sub-total</p>
              <p>INR {subTotal}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <p>VAT (%)</p>
              <p>INR 0.00</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <p>Shipping fee</p>
              <p>INR {cartData[0]?.shippingFee}</p>
            </div>

            <div
              style={{
                width: "342px",
                height: "1px",
                background: "rgba(0, 0, 0, 0.20",
                marginTop: "25px",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <p>Total</p>
              <p>INR {subTotal + cartData[0]?.shippingFee}</p>
            </div>
            <div
              style={{
                width: "342px",
                height: "1px",
                background: "rgba(0, 0, 0, 0.20",
                marginTop: "10px",
              }}
            ></div>

            <div
              style={{
                width: "341px",
                height: "58px",
                background: "#000",
                borderRadius: "10px",
                marginTop: "22px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  Checkout
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "6px",
                  }}
                >
                  <img
                    src={RightArrow}
                    alt=""
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Empty Cart
          </h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
