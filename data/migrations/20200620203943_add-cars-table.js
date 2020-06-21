// exports.up = function(knex) {
//   return knex.schema.createTable("cars", function(table) {
//     table.increments('id')
//     table.string('VIN', 255).notNullable()
//     table.string('make', 255).notNullable()
//     table.string('modal', 255).notNullable()
//     table.integer('mileage', 255).notNullable()
//   })
// };

// exports.down = function(knex) {
//   return knex.schema.dropTableIfExists('cars')
// };

exports.up = async function (knex) {
  await knex.schema.createTable('cars', function (table) {
    table.increments('id')
    table.string('VIN', 255).notNullable()
    table.string('make', 255).notNullable()
    table.string('model', 255).notNullable()
    table.integer('mileage', 255).notNullable()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars')
}