let n = 100;

const fizzBuzzArray = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    // if (i % 3 === 0 && i % 5 === 0)  {arr = [...arr, "FizzBuzz"]}
    // else if (i % 3 === 0) arr = [...arr, "Fizz"]
    // else if (i % 5 === 0) arr = [...arr, "Buzz"]
    // else arr = [...arr, i]
    if (i % 3 === 0 && i % 5 === 0)  arr.push("FizzBuzz")
    else if (i % 3 === 0) arr.push("Fizz")
    else if (i % 5 === 0) arr.push("Buzz")
    else arr.push(i)
  }
  return arr;
};
console.log(fizzBuzzArray(n));
