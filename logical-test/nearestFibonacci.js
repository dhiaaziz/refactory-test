// Nearest Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function nearestFibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let tmp = 0;
  let currentFibbo = 0;
  do {
    currentFibbo = num1 + num2;
    tmp = num2;
    num1 = num2;
    num2 = currentFibbo;
    // console.log(currentFibbo)
  } while (currentFibbo < n);

  return currentFibbo - n;
}

const arr = [15, 1, 3];
const sumOfArr = arr.reduce((accumulator, currentValue) => {
//   console.log(accumulator);
//   console.log(currentValue);
  return accumulator + currentValue;
}, 0);
console.log(nearestFibonacci(sumOfArr))

