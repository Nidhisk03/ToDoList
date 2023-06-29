import React  from "react";
import { useState } from "react";


function Input(props){

    const [ inputext , setinput] = useState("");


    function handlechange(event){
        const newValue=event.target.value;
       setinput(newValue);
      }

 return  (<div className="form">
        <input onChange={handlechange}  type="text" value={inputext}/>
        <button onClick={()=>{
          props.onAdd(inputext);
          setinput("");
        }}>
          <span>Add</span>
        </button>
      </div>
 );
}

export default Input;
