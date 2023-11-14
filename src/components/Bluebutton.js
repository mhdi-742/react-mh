import React,{useState} from 'react'
function Bluebutton() {
    const [text, SetText]=useState('enter your text here');
    const uppercase=()=>{
    SetText(text.toUpperCase());    
    }
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={uppercase}>UPPERCASE</button>
    </div>
  )
}

export default Bluebutton
