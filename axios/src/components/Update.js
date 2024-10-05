import React, {  useState } from 'react'

export default function Update() {
    
    const [state,setState]=useState({name:"kunal",age:29})
    const [name,setname]=useState()
    const [age,setage]=useState()
  
       function update(){
        
        setState({...state,name,age})
       }
    
  return (
    <div>
        <h1>this is update program</h1>
        <h4>my name is {state.name}age is{state.age}</h4>
        <input type='text' onChange={(e)=>setname(e.target.value)} placeholder='name'></input>
        <input type='text' onChange={(e)=>setage(e.target.value)} placeholder='age' ></input>
        <button onClick={update}>Update</button>
    </div>
  )
}
