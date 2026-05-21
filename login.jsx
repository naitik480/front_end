import Card from './component/card';
import Input from './component/input';
import Button from './component/button';
import Header from './component/heading';
 import Para from './component/paragraph';

const Login =() =>{
    return(
<div className='container'>

        <Card id='Login'>

    

            <header id='x'>Login</header>

       
       <Input type='text' text="👤Username"/>
        <Input type='password' text="🔒password"/>
        <Input type='checkbox'/>
        <para id='a'>Remember me</para>
      
    

        <Button  text='LOGIN'></Button>
       
       

        <para id='b'><a href=''>Forgot Username/Password?</a></para>





        </Card>

</div>








    )
}
export default Login;