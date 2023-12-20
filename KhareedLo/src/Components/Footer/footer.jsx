import React from 'react'
import "./footer.css"

function Footer() {

    const year = new Date().getFullYear();
    

  return (
   <div className="footerDiv">
    <footer>
    <div className="footerContainer">
        <div className="footerDetailsOne forres">
            <h3>Get to know us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Release</p>
            <p>Amazon Cares</p>
            
        </div>
        <div className="footerDetailsOne forres">
            <h3>Connect with us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            
        </div>
        <div className="footerDetailsOne forres">
            <h3>Make money with us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            
        </div>
        <div className="footerDetailsOne forres">
            <h3>Bhaag Yaha se</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            
        </div>
    </div>

    <div className="lastDetails">
        <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/amazon_PNG25.png?raw=true" alt="" />
        <p><p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p></p>
    
    </div>
   </footer>
   </div>
  )
}

export default Footer
