'use strict'

const ui = require('hgx-ui')
const { min } = require('hgx-tools')

function App() {
  console.log('App 入口')
  let minNum = min(2, 5)
  ui(minNum)
}

App()
