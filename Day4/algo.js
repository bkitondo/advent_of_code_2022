const fs = require('fs')
const input = fs.readFileSync('data.txt', encoding="utf-8")
const data = input.toString().split('\n')
console.log(data.length);
let sum = 0
data.map(items => {
  let itemLeft = items.split(',')[0]
  let itemRight = items.split(',')[1]
  if (
    (parseInt(itemLeft.split('-')[0]) <= parseInt(itemRight.split('-')[0]) &&
    parseInt(itemRight.split('-')[1]) <= parseInt(itemLeft.split('-')[1])) ||
    (parseInt(itemLeft.split('-')[0]) >= parseInt(itemRight.split('-')[0]) &&
    parseInt(itemRight.split('-')[1]) >= parseInt(itemLeft.split('-')[1]))
  ) {
    sum += 1
  }
})
console.log(sum)
