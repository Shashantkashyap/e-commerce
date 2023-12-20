import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Option({deletedata,get}) {

  const removedata=async(req,res)=>{
    try{
      const res = await fetch(`http://localhost:8005/remove/${deletedata}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      credentials: "include",
    });
    const data = await res.json();
    console.log(data)

    if(res.status===400 || !data){
      console.log(error);

    }else{
      toast.success("item removed",{
        position:'top-right'
      })
      get();
    }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='add_remove_select'>
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{cursor:'pointer'}} onClick={()=>removedata(deletedata)}>Delete</p> <span>|</span>
      <p className='forremovemedia'>Save for Later</p> <span>|</span>
      <p className='forremovemedia'>See more like this</p>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default Option
