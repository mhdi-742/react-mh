import { useState } from "react"
import React from 'react'
export default function TextArea() {
    const [text, SetText]=useState('enter your text here');
    const [speedText,ST]=useState('0 min 0 sec');
    const uppercase=()=>{
        SetText(text.toUpperCase());       
        }
    const lowercase=()=>{
        SetText(text.toLowerCase());       
        }  
    const inversion=()=>
    {
      let  Itext='';
      for(let i=0;i<text.length;i++)
      {
        if(text[i]===text[i].toUpperCase())
            Itext+=text[i].toLowerCase();
        else
        Itext+=text[i].toUpperCase();
      }
      SetText(Itext);
    }     
    const handleOnchange =(event)=>{
        SetText(event.target.value);
        let s=text.split(" ").length*60/238;
        let m=Math.trunc(text.split(" ").length/238);
        s=Math.trunc(s%60);
        let ans='';
        ans=m+'min '+s+'sec.'
        ST(ans);
 }
  return (
    <div>
    <div className="mb-3">
    <h1>Enter Your Text</h1>
    <hr></hr>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={text} onChange={handleOnchange}></textarea>
   </div>
   <div>
     <button type="button" className="btn btn-primary mx-3" onClick={uppercase}>UPPERCASE</button>
     <button type="button" className="btn btn-primary mx-3" onClick={lowercase}>LOWERCASE</button>
     <button type="button" className="btn btn-primary" onClick={inversion}>INVERSION</button>
    </div>
    <div className="container my=3">
       <h2>
           TEXT SUMMARY
       </h2>
       <p>Words: {text.split(" ").length} characters: {text.length} Aprox time to read:{speedText}</p>
       <h2>PREVIEW</h2>
       <p>{text}</p>
    </div>
    </div>
  )
  }



