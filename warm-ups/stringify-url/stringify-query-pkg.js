const queryStr = require('query-string')

const parsedStr = queryStr.parse(location.search)

console.log(parsedStr)