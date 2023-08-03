const { Task } = require('../models');

const taskData = [
  {
    name: 'Build API',
    description: 'Client has asked for new API, build and demo.',
    status: true,
    user_id: 'saulbrego',
    project_id: 1
  },
  {
    name: 'Overhaul Database',
    description: 'Database needs to be reconfigured and outdated entries removed.',
    status: false,
    user_id: 'anikoasfaloth',
    project_id: 2
  },
  {
    name: 'Develop Library',
    description: 'New library needed to improve company website.',
    status: false,
    user_id: 'saulbrego',
    project_id: 1
  },
  {
    name: 'Research Potential Frameworks',
    description: 'New frameworks needed for team to improve testing.',
    status: true,
    user_id: 'saulbrego',
    project_id: 2
  },
  {
    name: 'Fix Bugs',
    description: '',
    status: false,
    user_id: 'anikoasfaloth',
    project_id: 1
  }
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;
