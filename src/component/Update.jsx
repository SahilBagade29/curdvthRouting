import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Update(props) {
  const[InputData,setInputData]=useState({id: props.user.id, FirstName: props.user.FirstName, LastName: props.user.LastName, EMPID: props.user.EMPID, Email: props.user.Email })

const navigate=useNavigate()

  const onUpdate=()=>{
    debugger
   props.userobj(InputData)
   navigate("/")
    
  }
  
  return (

    <center>
    <h5>CRUD Routing</h5>
    <input type="text" placeholder='enter your first name' value={InputData.FirstName} onChange={(e) => setInputData({ ...InputData, FirstName: e.target.value })} /><br></br><br></br>
    <input type="text" placeholder='enter your last name' value={InputData.LastName} onChange={(e) => setInputData({ ...InputData, LastName: e.target.value })} /><br></br><br></br>
    <input type="text" placeholder='enter your emp Id' value={InputData.EMPID} onChange={(e) => setInputData({ ...InputData, EMPID: e.target.value })} /><br></br><br></br>
    <input type="text" placeholder='enter your email' value={InputData.Email} onChange={(e) => setInputData({ ...InputData, Email: e.target.value })} /><br></br><br></br>
    <button type="button" class="btn btn-warning" onClick={()=>onUpdate()}>Update</button> 
    <button type="button" class="btn btn-danger" onClick={()=> navigate("/")}>Cancel</button>


   


  </center>

  )
}

export default Update