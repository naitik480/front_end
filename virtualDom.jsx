import { useState } from "react";

const Vdom =() =>{

    const[ival,setIval]= useState('def');
    function handleChange(e){
        console.log(e.target.value)
        setIval(e.target.value)
    }
    return(
        <>
        <input type="text" value={ival}onChange={handleChange}/>
        <p>{ival}</p>
        
        </>


    )
}

export default Vdom;