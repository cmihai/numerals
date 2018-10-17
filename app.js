const readline = require('readline');

var { toRoman } = require('./convert');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an Arabic numeral> ', (arabic) => {
    let parsed = parseInt(arabic, 10);

    console.log(`${parsed} => ${toRoman(parsed)}`);

    process.exit(0);
});