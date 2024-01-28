import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home(props) {
  const [InputData, setInputData] = useState({id:1, FirstName: "", LastName: "", EMPID: "", Email: "" })
  const [AddItem, setAddItem] = useState(props.items)//accessing data from parent to child component



  const additem = () => {
     debugger
    props.addUsers(InputData)  //Passing data(InputData) to parent component using props
    setInputData({ id: Math.random().toString(16).slice(2), FirstName: "", LastName: "", EMPID: "", Email: "" })
  }

  const onedit=(items)=>{
    debugger
   props.userobj(items)
  
   
  }
  const ondelete=(id)=>{
    // debugger
    props.delete(id)
   
  }


  return (
  
      <center>
        <h5>CRUD Routing</h5>
        <input type="text" placeholder='enter your first name' value={InputData.FirstName} onChange={(e) => setInputData({ ...InputData, FirstName: e.target.value })} /><br></br><br></br>
        <input type="text" placeholder='enter your last name' value={InputData.LastName} onChange={(e) => setInputData({ ...InputData, LastName: e.target.value })} /><br></br><br></br>
        <input type="text" placeholder='enter your emp Id' value={InputData.EMPID} onChange={(e) => setInputData({ ...InputData, EMPID: e.target.value })} /><br></br><br></br>
        <input type="text" placeholder='enter your email' value={InputData.Email} onChange={(e) => setInputData({ ...InputData, Email: e.target.value })} /><br></br><br></br>
        <button type="button" class="btn btn-primary" onClick={() => additem()}>ADDITEM</button><br></br><br></br>


        <table style={{ width: "70%" }}>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EMPID</th>
            <th>Email</th>
          </tr>
          <tbody>
          {
           props.items.map((items)=>{
          
              return(
             
                <tr key={items.id}>
                
                <td>{items.FirstName}</td>
                <td>{items.LastName}</td>
                <td>{items.EMPID}</td>
                <td>{items.Email}</td>
                <td><Link  to={`/update/${items.id}`}type="button" class="btn btn-warning" onClick={()=>onedit(items)}>EDIT</Link></td>
                <td><button type="button" class="btn btn-danger" onClick={()=>ondelete(items.id)}>DELETE</button></td>
              </tr>
              )
            })
          }
          </tbody>
        </table>


      </center>
    
  )
}

export default Home