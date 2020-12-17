function add(a, b) {
  console.log('tools 调用')
  return a + b
}

function min(a, b) {
  return Math.min(a, b)
}

const fs = require('fs')

module.exports = {
  add,
  min,
  fs
}
