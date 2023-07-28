
const { Project } = require('../models');

const userData = [
  {
    name: "Project 1",
    status: true
  },
  {
    name: "Project 2",
    status: false
  },
  {
    name: "Project 3",
    status: true
  }
]

const seedProjects = () => User.bulkCreate(userData);

module.exports = seedProjects;