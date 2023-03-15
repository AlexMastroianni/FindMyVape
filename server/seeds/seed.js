const db = require('../config/connection');
const { Location } = require('../models');

const locationData = require('./locationData.json');

db.once('open', async () => {
  await Location.deleteMany({});

  await Location.insertMany(locationData);

  console.log('Database Has been Seeded');
  process.exit(0);
});
