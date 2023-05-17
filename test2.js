
/*Importing and validator */
const importedName = require("./test1")
const validator = require('validator')
console.log(importedName);
console.log(validator.isEmail('fef@example.com'))
console.log(validator.isURL('https/fef@example.com'))
/*chalk */
const chalk = require('chalk')
const greenMsg = chalk.green("Kanach")
const greenBoldMsg = chalk.green.bold("Kanach")
const greenBoldInverseMsg = chalk.green.inverse.bold("Kanach")
console.log(greenMsg,greenBoldMsg,greenBoldInverseMsg);
