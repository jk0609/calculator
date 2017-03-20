var add = function(num1, num2) {
  return num1 + num2;
};
var subtract = function(num1, num2) {
  return num1 - num2;
};
var multiply = function(num1, num2) {
  return num1 * num2;
};
var divide = function(num1, num2) {
  return num1 / num2;
};


var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var addresult = add(number1, number2);
var subresult = subtract(number1, number2);
var multresult = multiply(number1, number2);
var divresult = divide(number1, number2);
alert('Add:'+addresult+' Subtract:'+subresult+' Multiply:'+multresult+' Divide:'+divresult);
