import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Right({item}) {

  const[price, setPrice]= useState(0);

  useEffect(()=>{
    totalAmount();
  },[item])

  const totalAmount =()=>{
    let price=0;
    item.map((e)=>{
      price += e.price.cost;
    });
    setPrice(price);
  }

  return (
    <div className='right_buy'>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg"  />
      <div className="cost_right">
        <p>Your order is elegible for free delivery</p>
        <span style={{color:"#565959"}}>Select the option for checkout. Details</span>
        <h3>Subtotal ({item.length} item): <span style={{fontWeight:700}}>{price} </span></h3>
        <Link to={"/click"}>
        <button className='rightbuy_btn'>Process to buy</button>
        </Link>
        <div className="emi">
            Emi available
        </div>
      </div>
    </div>
  )
}

export default Right
