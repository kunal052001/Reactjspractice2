import React, { useEffect, useState } from 'react'

export default function Form() {
    const data={name:"",email:"",password:""}
    const [val,setVal]=useState(data)
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        if(flag)
            {
            console.log("registerd succesful")
            }
    },[flag])
    function validate(e){
        setVal({...val,[e.target.name]:e.target.value})
        console.log(val)
    }
        
    function submit(e){
        e.preventDefault()
        const emli=/\S+@\S+\.\S+/;
        if(!val.name||!val.email||!val.password)
        {
            alert("enter the complete data")
        }else if(!emli.test(val.email)){
               alert("plse enter proper email")
        }
        else if(val.password.length<8)
        {
            alert("password length should be 8")
        }
        else{
           setFlag(true)
        }
    }

  return (
    <div>
        <h2> Hay this is kunal form</h2>
        <form onSubmit={submit}>
            <label>name</label>
            <input type='text' value={val.name} name="name" placeholder='name' onChange={validate}></input>
            <label>EMAIL</label>
            <input type='text' value={val.email} name="email" placeholder='email' onChange={validate}></input>
            <label>Password</label>
            <input type='text' val={val.password} name="password" placeholder='password' onChange={validate}></input>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
