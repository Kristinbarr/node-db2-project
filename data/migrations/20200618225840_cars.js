
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      // create primary key
      tbl.increments()
      tbl.integer('VIN', 128).unique().notNullable()
      tbl.string('make', 128).notNullable()
      tbl.string('model', 128).notNullable()
      tbl.string('mileage', 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};