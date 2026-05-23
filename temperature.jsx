
import { useState } from "react";
import Card1 from './component/temp';
import Header from './component/heading';




const Temperature =()=>{

    const[celcius,setCelcius]=useState("");
    const[fahrenheit,setFahrenheit]=useState("");

    function celciusChange(e){
        setCelcius(e.target.value)
        setFahrenheit((e.target.value*9/5)+32);
    }

    function fahrenheitChange(e){
        setFahrenheit(e.target.value)
         setCelcius((e.target.value-32)*5/9);
    }

    return(

        <>
        <Card1 id='card1'>

<div className="container">
    
    <header id='tc'>Temperature Converter</header>
        
        <input id='cc' type='number' value={celcius} placeholder='Enter celcius'
        onChange={celciusChange}/>
        <input id='fc' type='number' value={fahrenheit} placeholder='Enter fahrenheit'
        onChange={fahrenheitChange} />
       
 </div>  
 
 
 </Card1>
         </>

    )
}

export default Temperature;