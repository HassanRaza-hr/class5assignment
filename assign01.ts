//  Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method 
 //to insert the value at the specified index in the array. Return the modified array.
 let index=12;
 let value="hassan"
 function array1(arr:any[],index:number,value:any){
    arr.splice(index,0,value)
    return arr;
 }
 let arr:number[]=[1,2,3,4,5,6]
 console.log(array1(arr,3,3))