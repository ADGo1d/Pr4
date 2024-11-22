
const dotenv = require('dotenv');
const process = require('process');


dotenv.config();


const args = process.argv.slice(2);
const nameArg = args.find(arg => arg.startsWith('--name='));


const name = nameArg
  ? nameArg.split('=')[1]
  : process.env.NAME || 'unknown user';


console.log(`Hello ${name}!`);