import React, { useState } from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

    const [userData, setUserData] = useState({
        fname:"",
        email:"",
        mobile: "",
        password:"",
        cpassword:""

    })
    console.log(userData)

    const addData=(e)=>{
        const {name,value} = e.target

        setUserData(()=>{
            return{
                ...userData,[name]:value
            }
        })
    }

    const sendData = async(e)=>{
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = userData;
        if(fname.length ===0){
            toast.warning("please enter your name",{
                position:"top-center",

            })
        }else if(email.length ===0){
            toast.warning("please enter valid email address",{
                position:"top-center",

            })
        }else if(mobile.length ===0 ){
            toast.warning("please enter mobile number",{
                position:"top-center",

            })
        }else if(password.length === 0){
            toast.warning("please enter password",{
                position:"top-center",

            })
        }else{
            const res = await fetch(" http://localhost:8005/register",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                fname,email,mobile,password,cpassword
            })
        });
        const data = await res.json();
        //console.log(data);

        if(res.status ===422 || !data){
            toast.warning("invalid details",{
                position:"top-center",

            })
        }else{
            //alert("data successfull saved");
            toast.success("data added successfully",{
                position:"top-center",
            })
            setUserData({...userData, fname:"",email:"",mobile:"",password:"",cpassword:""})
        }
    }
        }


        

  return (
    <div>
      <section>
        <div className="signContainer">
            <div className="signHeader">
                <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/blacklogoamazon.png?raw=true" alt="amazonLogo" />
            </div>
            <div className="signForm">
                <form method='POST'>
                    <h1>Sign-Up</h1>
                    <div className="formData">
                        <label htmlFor="fname">Your Name</label>
                        <input type="text" name='fname' id='fname' placeholder='Enter your name' onChange={addData} value={userData.fname}/>
                    </div>
                    <div className="formData">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' placeholder='Enter your email' onChange={addData} value={userData.email}/>
                    </div>
                    <div className="formData">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" name='mobile' id='mobile' placeholder='Enter your number' onChange={addData} value={userData.mobile}/>
                    </div>
                    <div className="formData">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' placeholder='Enter password' onChange={addData} value={userData.password} />
                    </div>
                    <div className="formData">
                        <label htmlFor="cpassword">Password Again</label>
                        <input type="cpassword" name='cpassword' id='cpassword' placeholder='Enter password' onChange={addData} value={userData.cpassword} />
                        
                    </div>
                    <button className='signBtn' onClick={sendData}>Continue</button>

                    <div className="signinInfo">
                        <p>Aready have an account ? </p>
                        <Link to="/login">
                        Signin
                        </Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
      </section>
    </div>
  )
}

export default Signup
