const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second)

writeFileSync(
  './content/result-sync.txt',
  `Here is the resulet ${first},,${second}`,
  { flag: 'a' }
)

console.log('done with this task')
console.log('ready to the next task')
