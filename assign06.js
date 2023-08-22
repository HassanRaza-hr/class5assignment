"use strict";
//  Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
/*function calculateSum(arrayy:number[]){
    let sum=0;
    let index=0;
    while(index<arrayy.length){
        sum +=arrayy[index];
        index++;
    }
    return sum;
}
var numberArray:number[]=[1,3,24,100];
var result=calculateSum(numberArray)
console.log(result);*/
function calculateSum(arry) {
    var s = 0;
    var sum = 0;
    while (s < arry.length) {
        sum = sum + arry[s];
        s++;
    }
    return sum;
}
console.log(calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
