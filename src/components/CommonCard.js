import React from "react";

import Delete from "../assets/delete.png";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { cartProductIncrement } from "../Redux/Features/cartDataSlice";
import { cartProductDecrement } from "../Redux/Features/cartDataSlice";
import { deleteCartProduct } from "../Redux/Features/cartDataSlice";

function CommonCard(props) {
  const allData = props.item;
  console.log("allData", allData);

  const dispatch = useDispatch();

  const handleIncrementProduct = () => {
    dispatch(cartProductIncrement({ name: allData.name }));
  };

  const handleDecrementProduct = () => {
    dispatch(cartProductDecrement({ name: allData.name }));
  };

  const handleDelete = () => {
    dispatch(deleteCartProduct(allData.name));
  };

  return (
    <div
      style={{
        width: "341px",
        height: "103px",
        borderRadius: "10px",
        background: "#F2F2F2",
        marginBottom: "15px",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            width: "83px",
            height: "89px",
          }}
        >
          <img
            src={allData.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              marginTop: "7px",
              marginLeft: "10px",
            }}
          />
        </div>

        <div
          style={{
            marginLeft: "17px",
            marginTop: "15px",
          }}
        >
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {allData.name}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "13px",
                cursor: "pointer",
              }}
              onClick={handleDelete}
            >
              <img
                src={Delete}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
            </div>
          </div>
          <p
            style={{
              color: "rgba(0, 0, 0, 0.60)",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 600,
              marginTop: "4px",
            }}
          >
            Size {allData.selectSize}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 400,
                marginTop: "18px",
              }}
            >
              INR {allData.qty * allData.price}
            </p>
            <div
              style={{
                display: "flex",
                position: "absolute",
                right: "18px",
                bottom: "0%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "23px",
                  height: "23px",
                  border: "1px solid  rgba(0, 0, 0, 0.20)",
                  borderRadius: "3px",
                  marginRight: "9px",
                  cursor: "pointer",
                }}
                onClick={handleDecrementProduct}
              >
                <BiMinus style={{ width: "23px", height: "23px" }} />
              </div>

              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  marginRight: "9px",
                }}
              >
                {allData.qty}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "23px",
                  height: "23px",
                  border: "1px solid  rgba(0, 0, 0, 0.20)",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={handleIncrementProduct}
              >
                <BsPlus style={{ width: "23px", height: "23px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonCard;
