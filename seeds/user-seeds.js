// Defines the Categories functions and its data array and sets up the seeding data. //
const { User } = require('../models');

const userData = [
  {
    name: "Saul",
    username: "saulbrego",
    password: "password1234"
  },
  {
    name: "Brenda",
    username: "brendashadowfax",
    password: "password1234"
  },
  {
    name: "Aniko",
    username: "Anikoasfaloth",
    password: "password1234"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;