import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
function App() {
 document.body.style.margin=0;
 const[mode,SetMode]=useState('light');
 const[color,SetColor]=useState('black');
 const[bcolor,SetbColor]=useState('white');
 const[textareacolor,Ctextareacolor]=useState('white');
 const change=()=>
 {
   if(mode==="light")
    {SetMode('dark'); SetColor('white');SetbColor('black'); Ctextareacolor('#343a40');}
   else 
     {SetMode('light'); SetColor('black');SetbColor('white');Ctextareacolor('white');}  
 }
 document.body.style.background=`${bcolor}`;
  return (
    <div className="App">
      <div className='nav'>
      <Navbar title="CountTxt" mode={mode} color={color} togle={change}></Navbar>
      </div>
      <div className='ta container'>
      <TextArea mode={mode} color={color} textarea={textareacolor}></TextArea>
      </div>
    </div>
  );
}

export default App;
