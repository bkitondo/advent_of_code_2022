const fs = require('fs')
let sumElfes = []

fs.readFile('data.txt', 'utf-8', (error, data) => {
  const filedata = data.split('\n\n')

  filedata.forEach(element => {
    let sum = 0
    const elements = element.split('\n')

    elements.forEach(value => {
      sum += parseInt(value)
    })
    sumElfes.push(sum)
  })
  sumElfes = sumElfes.sort((a, b) => b - a)
  console.log(sumElfes[0])
  console.log(sumElfes[0] + sumElfes[1] + sumElfes[2])
})
