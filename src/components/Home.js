import React from "react";
import Bell from "../assets/bell.png";
import Search from "../assets/search.png";
import Filter from "../assets/filter.png";
import HomeIcon from "../assets/home.png";
import SavedIcon from "../assets/heart.png";
import CartIcon from "../assets/shopping.png";
import SettingIcon from "../assets/settings.png";
import AllProducts from "./AllProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  const navigate = useNavigate();
  const categories = ["All", "Men", "Women", "Kids"];
  const footerData = [
    { icon: HomeIcon, name: "Home" },
    { icon: SavedIcon, name: "Saved" },
    { icon: CartIcon, name: "Cart" },
    { icon: SettingIcon, name: "Settings" },
  ];

  const [activeOption, setActiveOption] = useState(0);
  console.log("activeOption " + activeOption);
  if (activeOption === 2) {
    navigate("/cart");
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "390px",
          height: "640px",
          background: "#FFF",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "24px",
          }}
        >
          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-1.6px",
            }}
          >
            Discover
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "25px",
              position: "relative",
              cursor: "pointer",
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
            display: "flex",
            justifyContent: "space-between",
            marginTop: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "8%",
                top: "25%",
                marginLeft: "18px",
              }}
            >
              <img
                src={Search}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div
              style={{
                width: "279px",
                height: "53px",
                marginLeft: "24px",
              }}
            >
              <input
                placeholder="Search anything"
                style={{
                  width: "inherit",
                  height: "inherit",
                  outline: "none",
                  paddingLeft: "50px",
                  background: "#F2F2F2",
                  borderRadius: "10px",
                  border: "none",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  letterSpacing: "-0.32px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "53px",
              height: "53px",
              borderRadius: "10px",
              background: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "25px",
              cursor: "pointer",
            }}
          >
            <img
              src={Filter}
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          </div>
        </div>

        <div style={{ marginTop: "16px", display: "flex", marginLeft: "24px" }}>
          {categories.map((category, index) => (
            <div>
              <div
                style={{
                  height: "38px",
                  borderRadius: "10px",
                  background: index === 0 ? "#000" : "#F2F2F2",
                  marginRight: "15px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                    letterSpacing: "-0.32px",
                    padding: "10px 24px",
                    color: index === 0 ? "#FFF" : "#000",
                  }}
                >
                  {category}
                </p>
              </div>
              <div
                style={{
                  marginTop: "24px",
                  position: "absolute",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {activeOption == 0 && index === 0 && <AllProducts />}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "390px",
            height: "35px",
            position: "absolute",
            display: "flex",
            bottom: "2%",
            borderTop: "1px solid rgba(0, 0, 0, 0.20)",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {footerData.map((icons, index) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setActiveOption(index)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  src={icons.icon}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
              <p
                style={{
                  color: "#8D7B7B",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "-0.24px",
                }}
              >
                {icons.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
