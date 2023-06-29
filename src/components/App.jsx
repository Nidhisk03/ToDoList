import React from "react";
import { useState } from "react";
import Todoitem from "./todoitem"
import Input from "./Input";


function App() {
const[items,setitem]=useState([]);

function handleclick(inputext){
  setitem( (prevItem)=>{
     return [...prevItem , inputext];
  })
  
}

function deleteitem(id){
  setitem(prevItem=>{
    return prevItem.filter((item,index)=>{
        return index!==id;
      });
 });
 
}


  return (

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
  

     <Input 
     onAdd={handleclick}
     />

      
      <div>
        <ul>

       { items.map((todoitem,index) => (
          <Todoitem 
          key={index} 
          id={index}
          text={todoitem}
          onChecked={deleteitem} >
          </Todoitem>
      ) )}


        </ul>
      </div>
    </div>
  );
}

export default App;
