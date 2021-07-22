import React,{useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

const App = () => {
const APP_ID='f29e0388';
const APP_KEY="aaec13dd7ca17aa20cee721f1b57ec10	—";
const APP_MOREINFO = "https://swagger.io/.";

const[counter, setCounter]= useState(0);

useEffect(()=>{
  console.log("Effect has been run");
})

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button 
        onClick={()=> setCounter(counter+1)}
         className="search-button" 
         type="submit">
        {counter}
        </button>
      </form>
    </div>

)  ;
}

export default App;
