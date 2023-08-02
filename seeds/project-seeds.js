
const { Project } = require('../models');

const projectData = [
  {
    name: "Project 1",
    status: false
  },
  {
    name: "Project 2",
    status: false
  },
  {
    name: "Project 3",
    status: false
  }
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;