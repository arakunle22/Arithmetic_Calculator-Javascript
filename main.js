
// ############ getData From User ############

  var operation = window.prompt('Choose An Operation: \n " + ", " - ", " * ", " / ", " % "');
  var num1 = parseFloat(window.prompt("Enter First Number: "));
  var num2 = parseFloat(window.prompt("Enter Second Number: "));


// ############ Define My Function ##############

function add() {
  let sum = num1 + num2;

  alert(num1 + " + " + num2 + " = " + sum);
}

function subtract() {
  let sub = num1 - num2;

  alert(num1 + " - " + num2 + " = " + sub);
}
function divide() {
  let result = num1 / num2;

  alert(num1 + " / " + num2 + " = " + result);
}
function multiply() {
  let multiply = num1 * num2;

  alert(num1 + " * " + num2 + " = " + multiply);
}
function mod() {
  let mod = num1 % num2;

  alert(num1 + " % " + num2 + " = " + mod);
}


// ############ Using If Statement ############

if (operation == "+") {
  add();
} else if (operation == "%") {
  mod();
} else if (operation == "*") {
  multiply();
} else if (operation == "/") {
  divide();
} else if (operation == "-") {
  subtract();
} else {
  alert("Input A Valid Operation");
}
