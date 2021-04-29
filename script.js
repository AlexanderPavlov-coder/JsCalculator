const operation = prompt('Hello! Enter please the operation you want: (+ - / *)');

const firstNumber = +prompt('Please enter the first number');

const secondNumber = +prompt('Please enter the second number');

let decision;

if (operation === '+') {
  decision = firstNumber + secondNumber;
} 
else if (operation === '/') {
  decision = firstNumber / secondNumber;
}
else if (operation === '*') {
  decision = firstNumber * secondNumber;
} 
else if (operation === '-') {
  decision = firstNumber - secondNumber;
} 

alert(`Answer: ${firstNumber}${operation}${secondNumber}=${decision}`);