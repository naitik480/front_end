import Input from "./input1";
import Card from "./card1";
import Button from "./button1";


const Calculator = () =>{
    
    return(

        <>

        <Card id='cal' >
          
            <Input id='f' type='text' text='0'/>

            <Button id='a' text='AC' />
            <Button id='b' text='DEL' />
            <Button id='c' text='%' />
            <Button id='d' text='÷' />
            <Button id='e' text='7' />
            <Button id='g' text='8' />
            <Button id='h' text='9'  />
            <Button id='i' text='*' />
            <Button id='j' text='4' />
            <Button id='k' text='5' />
            <Button id='l' text='6' />
            <Button id='m' text='-'  />
            <Button id='n' text='1' />
            <Button id='o' text='2' />
            <Button id='p' text='3' />
            <Button id='q' text='+' />
            <Button id='r' text='0'  />
            <Button id='s' text='.' />
            <Button id='t' text='=' />
           





        </Card>
    </>
 );      
    
}

export default Calculator;

