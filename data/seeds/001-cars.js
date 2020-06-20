exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  // Inserts seed entries
  await knex('cars').insert([
    { id: 1, VIN: '12923', make: 'Toyota', model: 'Camery', mileage: 3000, transmissionType: 'V6', titleStatus: "clean" },
    { id: 2, VIN: '91013', make: 'Ford', model: 'Transit', milage: 30000, transmissionType: 'V8', titleStatus: "clean" },
    { id: 3, VIN: '12014', make: 'Porche', model: "Kyan", milage: 15000 },
  ])
}
