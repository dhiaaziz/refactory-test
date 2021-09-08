const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });


function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }

rl.question("Masukkan kata: ", function(kata) {
    const a = checkPalindrom(kata);
    console.log(a)
    rl.close()
});