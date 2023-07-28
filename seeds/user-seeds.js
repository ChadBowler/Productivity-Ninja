// Defines the Categories functions and its data array and sets up the seeding data. //
const { User } = require('../models');

const userData = [
  {
    name: "Saul",
    username: "saul@brego.io",
    password: "password1234"
  },
  {
    name: "Brenda",
    username: "brenda@shadowfax.io",
    password: "password1234"
  },
  {
    name: "Aniko",
    username: "Aniko@asfaloth.io",
    password: "password1234"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;