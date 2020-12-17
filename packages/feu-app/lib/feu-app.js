'use strict'

const ui = require('feu-ui')
const { min } = require('feu-tools')

function App() {
  console.log('App 入口')
  let minNum = min(2, 5)
  ui(minNum)
}

App()
