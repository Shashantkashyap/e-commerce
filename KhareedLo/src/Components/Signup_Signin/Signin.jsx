import React, { useContext, useState } from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from '../../Context/ContextProvider';

function Signin() {
    const { account, setAccount } = useContext(Logincontext);

    const [logData, setLogData]= useState({
        email:"",
        password:""
    })
    

    const addData=(e)=>{
        const {name , value} = e.target ; 

        setLogData(()=>{
            return {
                ...logData,
                [name]:value
            }
        })
    }

    const sendData = async(e)=>{
        e.preventDefault();

        const { email, password} = logData;

        if(email.length ===0){
            toast.warning("please enter valid email address",{
                position:"top-center",

            })
        }else if(password.length === 0){
                toast.warning("please enter password",{
                    position:"top-center",
    
                })
            }else{
                const res = await fetch("http://localhost:8005/login",{
                    
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email,password
            })
            
        });
        
        console.log(res)
        const data = await res.json();
        console.log(data)
        
        if(res.status === 400 || !data){
            toast.warning("invalid details",{
                position:"top-center",

            })
        }else{
            setAccount(data)
            toast.success("User logged in successfully",{
                position:"top-center",
            })
            setLogData({...logData, email:"", password:""})
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
                    <h1>Sign-In</h1>
                    <div className="formData">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='name' placeholder='Enter email' onChange={addData} value={logData.email}/>
                    </div>
                    <div className="formData">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' placeholder='Enter password' onChange={addData} value={logData.password} />
                    </div>
                    <button className='signBtn' onClick={sendData}>Continue</button>
                </form>
            </div>

            <div className="createAccountInfo">
                <p>New To Amazon</p>
                <Link to="/register">
                <button>Create Your Amazon Account</button>
                </Link>
            </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  )
}

export default Signin
