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

    
    
         
