//making a random quiz
// element goes from [300,500)
var num1 =Math.floor(Math.random() *200+300);
document.getElementById('M').textContent =num1.toString();

//changing second num
var num2 = Math.floor(Math.random() *100 +50);
document.getElementById('N').textContent =num2.toString();

//changing last number 
var num3 = Math.floor(Math.random()*1+50);
document.getElementById('L').textContent =num3.toString();
var num4 = num2 - num3;

document.querySelector('input[value="1"]').nextSibling.nodeValue=num1.toString()+ "-"+num4.toString();
document.querySelector('input[value="2"]').nextSibling.nodeValue=num1.toString()+ "-"+num2.toString();
document.querySelector('input[value="3"]').nextSibling.nodeValue=num1.toString()+ "-"+num2.toString()+  "-"+num3.toString();
document.querySelector('input[value="4"]').nextSibling.nodeValue=num1.toString()+ "-"+num2.toString()+  "+"+num3.toString();
