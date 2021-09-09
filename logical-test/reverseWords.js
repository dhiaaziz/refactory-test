const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Masukkan kalimat: ", function(sentence) {
    const reverseString = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ')
    console.log(reverseString)
    rl.close()
});