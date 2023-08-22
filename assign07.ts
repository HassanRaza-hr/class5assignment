/*Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit
 using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion
  for each temperature.*/
  /*function temperatureInput(c:any[]){
    var index=0;
    while(index>c.length){
        var Fahrenheit:any[]=c[]*9/5+32
        index++
    }

  }
  temperatureInput([1,2,3,4,5,6])*/
  // read instruction : if wanted to give a list of temp and want temperature conversions in the array we need give array and a blank array in 
  // which we present the results point #2:we need to provide similar index point to the both arrays during the expression process
 /* var C:number[]=[37,38,40,36];
  var Fahrenheit:number[]=[]
  function inFahrenheit(C:number[],){

  
  var index1=0;
while(index1<C.length){
    
   Fahrenheit[index1] =C[index1]*9/5+32;
   index1++
}
  }
  inFahrenheit(C)
  console.log(Fahrenheit)*/
  var temperature:number[]=[36,37,38,40]
  var tempInFahrenhiet:number[]=[];
  var indexx=0;
  while(indexx<temperature.length){
    tempInFahrenhiet[indexx]=temperature[indexx]*9/5+32;
    indexx++
  }
  console.log(tempInFahrenhiet)