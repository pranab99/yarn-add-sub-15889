const {
    argv
} = require('yargs')
const yargs = require('yargs')



yargs.command({
    command: 'add',
    describe: 'Adds all number after yarn add command seperated by spaces',
    // builder: {
    //     firstNumber: {
    //         describe: 'First Number',
    //         demandOption: true,  // Required
    //         type: 'number'     
    //     },
    //     secondNumber: {  
    //         describe: 'Second Number',
    //         demandOption: true,
    //         type: 'number'
    //     }
    // },

    // Function for your command
    handler(argv) {
        var args = process.argv.slice(1);
        var sum = 0;
        for (let i = 2; i < args.length; i = i + 1) {
            sum = sum + Number(args[i]);
        }
        console.log( sum)
    }
})


yargs.command({
    command: 'sub',
    describe: 'Subtracts all number after yarn add command seperated by spaces',
    // builder: {
    //     firstNumber: {
    //         describe: 'First Number',
    //         demandOption: true,  // Required
    //         type: 'number'     
    //     },
    //     secondNumber: {  
    //         describe: 'Second Number',
    //         demandOption: true,
    //         type: 'number'
    //     }
    // },

    // Function for your command
    handler(argv) {
        var args = process.argv.slice(1);
        var diff = args[2];
        for (let i = 3; i < args.length; i = i + 1) {
            diff -=  Number(args[i]);
        }
        console.log(diff)
    }
})

yargs.parse() // To set above changes