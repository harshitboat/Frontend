// create a function
//take at least 2 parameters-operation - add, sub, mul, div
// num1 - number
// num2 - number
// there can ven more parameters
//based on the operation perform the operation on num1 and num2
// return the result
function calculate(operation, num1, num2, ...moreNums) {
  let result;

  
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'mul':
      result = num1 * num2;
      break;
    case 'div':
      result = num1 / num2;
      break;
    default:
      return 'Invalid operation';
  }

  for (let num of moreNums) {
    switch (operation) {
      case 'add':
        result += num;
        break;
      case 'sub':
        result -= num;
        break;
      case 'mul':
        result *= num;
        break;
      case 'div':
        result /= num;
        break;
    }
  }

  return result;
}


console.log(calculate('add', 5, 10, 15, 20)); 
console.log(calculate('sub', 100, 20, 10));   
console.log(calculate('mul', 2, 3, 4));       
console.log(calculate('div', 100, 2, 5));     
