//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
//let n=0;
/*if(N<0){
    console.log("please enter valid input")
}
else{
    while(N>0){
        var product=N*5;
        N=N-1;
        console.log(product)
    }
}
*/
/*while(n<=100){
    n=n+2;
    console.log
}*/
// PROBLEM------write a ts program that calculates sum of all even number between 1 - 1000
/*var sum:number=0;
for( let i=1;i<100;i++){
    if(i%2!=0){
        sum=sum+i;
        console.log(i)
    
    }
}
console.log("sum",sum)*/
//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 function factorial(num0:number){
    if(num0>0){
        var result=num0
    var multiplier=num0-1; // 5-1=4
    

    while(multiplier>0){
        
         result*=multiplier;
        multiplier--
        
        
    }
console.log(result)
return
}
console.log("invalid input data")
}
factorial(5)

/*function factorial(num1:number){
    if(num1>0){
        let result:number=num1;
        let multiplier=num1-1;
        while(multiplier>0){
            result*=multiplier;
            multiplier--
        }
        console.log(result)
        return;
    }
    console.log("input is invalid")
}
factorial(-5)*/