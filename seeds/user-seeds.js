// Defines the Categories functions and its data array and sets up the seeding data. //
const { User } = require('../models');

const userData = [
  {
    name: 'Saul',
    username: 'saulbrego',
    password: 'password1234',
    project_id: 1
  },
  {
    name: 'Jane',
    username: 'janedoe',
    password: 'password1234',
    project_id: 2
  },
  {
    name: 'John',
    username: 'johnsmith',
    password: 'password1234',
    project_id: 2
  },
  {
    name: 'Mary',
    username: 'maryjones',
    password: 'password1234',
    project_id: 4
  },
  {
    name: 'Peter',
    username: 'peterwilliams',
    password: 'password1234',
    project_id: 5
  },
  {
    name: 'Paul',
    username: 'pauldavis',
    password: 'password1234',
    project_id: 5
  },
  {
    name: 'Elizabeth',
    username: 'elizabethmoore',
    password: 'password1234',
    project_id: 4
  },
  {
    name: 'Michael',
    username: 'michaelanderson',
    password: 'password1234',
    project_id: 2
  },
  {
    name: 'Sarah',
    username: 'sarahthomas',
    password: 'password1234',
    project_id: 3
  },
  {
    name: 'David',
    username: 'davidtaylor',
    password: 'password1234',
    project_id: 5
  },
  {
    name: 'Susan',
    username: 'susanmiller',
    password: 'password1234',
    project_id: 1
  },
  {
    name: 'James',
    username: 'jamesjones',
    password: 'password1234',
    project_id: 2
  },
  {
    name: 'Emily',
    username: 'emilybrown',
    password: 'password1234',
    project_id: 3
  },
  {
    name: 'Thomas',
    username: 'thomaswilliams',
    password: 'password1234',
    project_id: 4
  },
  {
    name: 'Jennifer',
    username: 'jenniferanderson',
    password: 'password1234',
    project_id: 5
  },
  {
    name: 'William',
    username: 'williamsmith',
    password: 'password1234',
    project_id: 1
  },
  {
    name: 'Charles',
    username: 'charlesdoe',
    password: 'password1234',
    project_id: 2
  },
  {
    name: 'Daniel',
    username: 'danielmiller',
    password: 'password1234',
    project_id: 3
  },
  {
    name: 'Noah',
    username: 'noahbrown',
    password: 'password1234',
    project_id: 4
  }
];

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;
