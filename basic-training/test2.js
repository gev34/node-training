
/*Importing and validator */
// const importedName = require("./test1")
// const validator = require('validator')
// console.log(importedName);
// console.log(validator.isEmail('fef@example.com'))
// console.log(validator.isURL('https/fef@example.com'))
// /*chalk */
// const chalk = require('chalk')
// const greenMsg = chalk.green("Kanach")
// const greenBoldMsg = chalk.green.bold("Kanach")
// const greenBoldInverseMsg = chalk.green.inverse.bold("Kanach")
// console.log(greenMsg,greenBoldMsg,greenBoldInverseMsg);
// /*argv*/
// console.log(process.argv)
// console.log(process.argv[2])
// const command = process.argv[2]
// if(command === "Gevs"){
//     console.log("Privet Gevs")
// }
/*yargs*/
// const yargs = require('yargs')
// console.log(yargs.argv)
/*Customize yargs version*/
// const yargs = require('yargs')
// yargs.version("1.1.0")
// console.log(yargs.argv)
/*Yargs commands */
const yargs = require('yargs')
yargs.version("1.1.0")
const notes = require('./test1')
// yargs.command({
//     command:"add",
//     describe:"Add a new note",
//     handler:()=> {
//         console.log("Adding a new note")
//     }
// })
// yargs.command({
//     command:"add",
//     describe:"Add a new note",
//     builder:{
//         title:{
//             describe:"Your Title"
//         }
//     },
//     handler:(argv)=> {
//         console.log("Adding a new note",argv)
//     }
// })
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Your Title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Your Body",
            demandOption:true,
            type:"string"
        }
    },
    handler:(argv)=> {
        notes.addNote(argv.title , argv.body)
    }
})
yargs.parse()

