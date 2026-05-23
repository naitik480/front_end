import { useState } from "react";

function Counter(){
const[txt,setTxt] = useState('hello')

 function change(){
    setTxt =() =>"hii"
 }
 return (
    <>
    <div>{txt}</div>
    <button onClick ={change} >click</button>
</>
 )

}
export default Counter;