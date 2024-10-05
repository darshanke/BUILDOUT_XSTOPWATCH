import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
 
  const [name, setName] = useState("Start");
  const [time,setTime] = useState(0);
  const [running,setrunning] = useState(false);

  const handleClick = () => {

    setrunning(!running)
    setName(running? "Start" : "Stop");
   
  };
  useEffect(()=>{
    let id ='';
   if(running){
   id=  setInterval(()=>{
      setTime((prev)=>prev+1)
    },1000)
   }
   else{
    clearInterval(id)
   }
   return ()=>clearInterval(id);
  },[running])

  const handleReset = () => {
    setName("Start");
    setrunning(false);
    setTime(0);
  };
 


  const formatTime=(seconds)=>{
    const minutes = Math.floor(seconds/60);
    const remainingSeconds  = seconds%60;
    return `${minutes}:${remainingSeconds<10? "0": ""}${remainingSeconds}`
  }



  return (
    <div style={{marginLeft:"2rem"}}>
      <h1>StopWatch</h1>
      <h4>
        Time: <span>{formatTime(time)}</span>
      </h4>
      <button onClick={handleClick}>{name}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
