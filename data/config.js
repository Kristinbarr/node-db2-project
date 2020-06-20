const knex = require('knex')


// const configOptions = require('../knexfile.js')
// // we must select the development object from our knexfile
// const db = knex(configOptions.development)
// // export for use in codebase
// module.exports = db;


// CAN ALSO BE WRITTEN THIS WAY
const configOptions = require('../knexfile.js').development
module.exports = knex(configOptions)