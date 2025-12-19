    let x=prompt("enter a number");
    let num =Number(x);
 
    function oddeven(){
    if(num%2==0){
    alert("even");
    document.writeln("even");
    
    }else if(num%2!==0){
     alert("odd");
      document.writeln("odd");
       }
} 
    
    function grade(){
         
        if(num>=90 ){
        Grade= 'A+';

        }else if(num>=80 ){
        Grade='A' ;

        }else if(num>=70){
        Grade='B';

        }else if(num>=60 ){
        Grade='C';

        }else if(num>=50){
        Grade= 'D';

        }else if(num<=50){
        Grade='Fail';
        }
        alert("Grade:"+Grade);{
        document.writeln("Grade:" +Grade);
        }


}

     function largestno(){

        let x =prompt("enter a 1st number");
 let num1=Number(x);

 let y=prompt("enter a 2nd number");
 let num2=Number(y);

 let z =prompt("enter a 3rd number");
 let num3=Number(z);

 if(num1>num2 && num1>num3){
 largest='num1';

 }else if(num2>num1 && num2>num3){
 largest='num2';

 }else if(num3>num1 && num3>num2){
 largest='num3';

 }alert("largest:"+largest);{
  document.writeln("largest:"+largest);  
 }

}
    
    
         
