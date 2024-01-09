let firstNumber = prompt('Enter the first number: ');
let secondNumber = prompt('Enter the second number: ');

let calc = function (firstNumber, secondNumber, operation) {
  switch (operation) {
    case '+':
      return alert(Number(firstNumber) + Number(secondNumber) + '.');
    case '-':
      return alert(Number(firstNumber) - Number(secondNumber) + '.');
    case '*':
      return alert(Number(firstNumber) * Number(secondNumber) + '.');
    case '/':
      return alert(Number(firstNumber) / Number(secondNumber)) + '.';
    case '%':
      return alert(Number(firstNumber) % Number(secondNumber)) + '.';
    default:
      return 'Invalid operation!';
  }
};
