import { useState } from "react"
import React from 'react'
export default function TextArea(props) {
    const [text, SetText]=useState('enter your text here');
    const [speedText,ST]=useState('0 min 0 sec');
    const styl={
      color: `${props.color}`
    }
    const clear=()=>{
      SetText('');
    }
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
    const copy=()=>
    {
      const Text=document.getElementById("exampleFormControlTextarea1");
      Text.select();
      navigator.clipboard.writeText(text);

    } 
    const res=()=>
    {
      let s=text.split(/[ ]+/);
      SetText(s.join(" "));
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
    <h1 style={styl}>Enter Your Text</h1>
    <hr style={styl}></hr>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={text} onChange={handleOnchange}style={{background:`${props.textarea}`,color:props.color}}></textarea>
   </div>
   <div className='my-3'>
     <button type="button" className="btn btn-primary mx-3" onClick={uppercase}>UPPERCASE</button>
     <button type="button" className="btn btn-primary mx-3" onClick={lowercase}>LOWERCASE</button>
     <button type="button" className="btn btn-primary" onClick={inversion}>INVERSION</button>
     <button type="button" className="btn btn-primary mx-3" onClick={copy}>COPY</button>
     <button type="button" className="btn btn-primary mx-1" onClick={res}>REMOVE EXTRA SPACE</button>
     <button type="button" className="btn btn-primary mx-1" onClick={clear}>CLEAR</button>
    </div>
    <div className="container my=3">
       <h2 style={styl}>
           TEXT SUMMARY
       </h2>
       <p style={styl}>Words: {text.split(" ").length} characters: {text.length} Aprox time to read:{speedText}</p>
       <h2 style={styl}>PREVIEW</h2>
       <p style={styl}>{text}</p>
    </div>
    </div>
  )
  }



