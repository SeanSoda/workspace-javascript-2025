// get the element 

// element --- property
const sE = document.getElementById('num1'); //element object
var num1 = sE.textContent; //string type
var num1 = parseInt(sE.textContent); //converts it to a string type
var num2 = parseInt(document.getElementById('num2').textContent); 
console.log("I got number num1 "+ num1 +" and now num2 "+num2);



//process
var c = num1 + num2;

//display
document.write(c);