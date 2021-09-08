// leapyear

// let number1 = 4;
// let number2 = 10;
// let arrYear = [];

// for (let i = number1; i < number2; i++) {
//   console.log(i);
//   arrYear = i % 4 === 0 ? [...arrYear, i] : [...arrYear];
// }
// console.log(arrYear);


//Reverse Words
// let normalString = 'aku anak sholeh!'

// let reverseString = normalString.split(' ').map(word => word.split('').reverse().join('')).join(' ')

// console.log(reverseString)

// // Nearest Fibonacci
// function fibonacci(n){
//     if (n <= 1) return n
//     return fibonacci(n-1) + fibonacci(n-2)

// }

// function nearestFibonacci(n) {
//     let num1 = 0
//     let num2 = 1
//     let tmp = 0
//     let currentFibbo = 0
//     do {
//         currentFibbo = num1 + num2
//         tmp = num2
//         num1 = num2 
//         num2 = currentFibbo
//         // console.log(currentFibbo)
//     } while (currentFibbo < n)

//     return currentFibbo - n


// }

// console.log(nearestFibonacci(19))