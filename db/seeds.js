const mongoose = require('./connection');

const Profiles = require('../models/profile-model');
const seedData = require('./seeds.json');

Profiles.deleteMany({})
    .then(() => {
        return Profiles.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    });
