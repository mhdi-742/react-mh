import { useState } from "react"
import React from 'react'
export default function TextArea() {
    const [text, SetText]=useState('enter your text here');
    const uppercase=()=>{
        SetText(text.toUpperCase());       
        }
    const handleOnchange =(event)=>{
        SetText(event.target.value);
 }
  return (
    <div>
    <div className="mb-3">
    <h1>Enter Your Text</h1>
    <hr></hr>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={text} onChange={handleOnchange}></textarea>
   </div>
   <div>
     <button type="button" className="btn btn-primary" onClick={uppercase}>UPPERCASE</button>
    </div>
    </div>
  )
  }



