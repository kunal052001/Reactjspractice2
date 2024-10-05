import React, {  useState } from 'react'

export default function Array() {

    
  const [arr,setArr]=useState([])
   function submit(){
       setArr([...arr,{id:arr.length,value:Math.random()}])
   }
   
    
  return (
    <div>
      
        <button onClick={submit}>add</button>
        
      {<ul>
       { arr.map((pr)=>{
            return  <li key={pr.id}>  {pr.value}</li>
              
        })
        }
      </ul>
       
      }
        
    </div>
  )
}
