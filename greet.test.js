const greet = require ("./greet.js")

test ('greets the name we pass as an argument', () => {
  expect(greet('Ed')).toEqual('Hi, Ed!')
})