
exports.up = function(knex) {
  return knex.schema.alterTable('cars', tbl => {
    tbl.string('transmissionType')
    tbl.string('titleStatus')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('cars', tbl => {
    tbl.dropColumns('transmissionType', 'titleStatus')
  })
};
