
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 11112, make: 'ford', model: 'mustang', mileage: 2000},
        {id: 2, VIN: 11115, make: 'ford', model: 'Transit', mileage: 20500, transmissionType: 'good', titleStatus: 'salvage'}
      ]);
    });
};
