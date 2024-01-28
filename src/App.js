import React, { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Update from './component/Update'
import Home from './component/Home'

function App() {
  const[AddItem,setAddItem]=useState([])
  const[newobj,setobj]=useState()

const userLists=(obj)=>{ //obj- argument passed  to access data in parent component
   debugger
  setAddItem([...AddItem,obj])
}
const deleteItem=(id)=>{
 debugger
  const arr=AddItem.filter((elem)=> id !== elem.id);
  setAddItem(arr)
  console.log('arr',arr);
}
const editobj=(obj)=>{
  debugger
  setobj(obj) 
}
const updateobj=(obj)=>{
  // debugger
  const arr=AddItem.map((elem)=> {return  obj.id === elem.id?obj:elem
  })
  setAddItem(arr)
}


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Home addUsers={userLists} items={AddItem} delete={deleteItem} userobj={editobj}/>} />
    <Route path='/update/:id' element={<Update user={newobj} userobj={updateobj}/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App