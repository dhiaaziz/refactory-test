const { R_OK } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you liveF ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

// function checkLeapYear(year1, year2) {
//   return str == str.split("").reverse().join("");
// }
let arrYear = [];

rl.question("Angka 1:", (number1) => {
  rl.question("Angka 2: ", (number2) => {
    for (let i = parseInt(number1); i <= number2; i++) {
      arrYear = i % 4 === 0 ? [...arrYear, i] : [...arrYear];
    }
    console.log(arrYear);

    rl.close();
  });
});
