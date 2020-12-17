'use strict'

const chalk = require('chalk')
const tools = require('feu-tools')
const log = console.log

function ui(num) {
  log('ui 库, 参数:' + num)
  log(chalk.green('√') + chalk.red(tools.add(10, num)))
}

module.exports = ui
