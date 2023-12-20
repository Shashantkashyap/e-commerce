import React, { useEffect, useState } from "react";
import "./Buynow.css";
import { RxDividerHorizontal } from "react-icons/rx";
import Option from "./option";
import Subtotal from "./Subtotal";
import Right from "./Right";

function Buynow() {
  const [cartdata, setCartdata] = useState("");
 // console.log(cartdata.carts);

  const getdatabuy = async () => {
    const res = await fetch("http://localhost:8005/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      credentials: "include",
    });
    const data = await res.json();

    if (res.status !== 201) {
      console.log("bhg yaha se");
    } else {
      setCartdata(data.carts);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);
  return (
    <>{
      cartdata.length ? (
        <div className="buynow_section">
        <div className="buynow_container">
          <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className="leftbuy_price">Price</span>
            <RxDividerHorizontal></RxDividerHorizontal>

            {
              cartdata.map((e,k)=>{
                return(
                  <>
                  <div className="item_containert">
              <img src={e.detailUrl} alt="" />

              <div className="item_details">
                <h3>{e.title.longTitle} </h3>
                <h3>{e.title.shortTitle} </h3>
                <h3 className="diffrentprice"></h3>
                <p className="unusuall"> </p>
                <p> </p>
                <img
                  src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                  alt=""
                />
                <Option deletedata={e.id} get={getdatabuy}></Option>
              </div>
              <h3 className="item_price">{e.price.cost} </h3>
            </div>
            <RxDividerHorizontal ></RxDividerHorizontal>
                  </>
                )
              })
              
            }

            
            
            <Subtotal item={cartdata}></Subtotal>
          </div>
          <div className="right_buy">
            <Right item={cartdata}></Right>
          </div>
        </div>
      </div>
      ) : (" ")
    }
      
    </>
  );
}

export default Buynow;
