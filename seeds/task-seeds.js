const { Task } = require('../models');

const taskData = [
  {
    name: "Build API",
    description: "Client has asked for new API, build and demo.",
    status: false
  },
  {
    name: "Overhaul Database",
    description: "Database needs to be reconfigured and outdated entries removed.",
    status: false
  },
  {
    name: "Develop Library",
    description: "New library needed to improve company website.",
    status: false
  },
  {
    name: "Research Potential Frameworks",
    description: "New frameworks needed for team to improve testing.",
    status: false
  },
  {
    name: "Fix Bugs",
    description: "",
    status: false
  }
]

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;
