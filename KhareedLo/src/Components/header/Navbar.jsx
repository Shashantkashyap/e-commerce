import React, { useContext, useEffect } from 'react'
import "./navbar.css"
import { IoMdSearch } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import Signin from '../Signup_Signin/Signin';
import { Logincontext } from '../../Context/ContextProvider';

export default function Navbar() {

  const { account, setAccount } = useContext(Logincontext);
  //console.log(account)

  const getdetailvaliduser = async()=>{
    const res = await fetch("http://localhost:8005/validateuser",{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      credentials: "include",
    });
    const data = await res.json();
    //console.log(data)
    if(res.status!==201){
      console.log("error")
    }else{
      console.log("data valid")
      setAccount(data);
    }
  }

  useEffect(()=>{
    getdetailvaliduser();
  },[])
  return (
    <div className='navDIv'>
      <header>
        <nav>
          <div className="left">
            <div className="navLogo">
            
            <NavLink to='/'>
            <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/amazon_PNG25.png?raw=true"  alt="" />
            </NavLink>
            </div>
            <div className="navSerachbar">
              <input type="text" />
              <div className="searchIcon">
              <IoMdSearch id='search'/>
              </div>
            </div>
             </div>
          <div className="right">
            <div className="navBtn">
              <NavLink to="/login">
                Signin
                
                </NavLink>
            </div>
            <div className="cartBtn">

              {
                account ? (<NavLink to="/buynow">
                <MdOutlineMessage>
              
              </MdOutlineMessage>
              <FaShoppingCart id='icon' />
                </NavLink>) : (<NavLink to="/login"></NavLink>) 
              }

              
            
            <p>Cart</p>
            </div>
            {
              account ? (<RxAvatar className='avtar'>{account.fname[0].toUpperCase()} </RxAvatar>) : (<RxAvatar className='avtar' />)
            }
            
          </div>
          
        </nav>
      </header>
    </div>
  )
}
