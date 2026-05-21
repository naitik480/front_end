import Card from './component/card';
import Input from './component/input';
import Button from './component/button';
import Header from './component/heading';
 import Para from './component/paragraph';

const Signup = () =>{
    return(

        <div className='container'>
        <Card className='Signup'>

            <header id='y'>Signup</header>

       <Input type='text' text="Username"/>
       <Input type='email' text="E-mail"/>
        <Input type='password' text="Password"/>
        <Input  type='password' text="confirm password"/>
     
        <Button  text='CREATE ACCOUNT'></Button>
        
        <para id='p1'>Already have an account.Login here.</para>
        
       </Card> 
</div>
    )


}
export default Signup;