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
    user_id: 'janedoe',
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
    user_id: 'janedoe',
    project_id: 1
  },
  {
    name: 'Build API',
    description: 'Client has asked for new API, build and demo.',
    status: true,
    user_id: 'saulbrego',
    project_id: 1
  },
  {
    name: 'Write blog post',
    description: 'Write a blog post about new API.',
    status: false,
    user_id: 'saulbrego',
    project_id: 1
  },
  {
    name: 'Fix bug in website',
    description: 'There is a bug in the website that is causing users to be logged out.',
    status: true,
    user_id: 'saulbrego',
    project_id: 2
  },
  {
    name: 'Add new feature to website',
    description: 'Add a new feature to the website that allows users to upload images.',
    status: false,
    user_id: 'saulbrego',
    project_id: 2
  },
  {
    name: 'Deploy new code to production',
    description: 'Deploy the new code to production so that users can use the new features.',
    status: true,
    user_id: 'saulbrego',
    project_id: 3
  },
  {
    name: 'Write unit tests',
    description: 'Write unit tests to ensure that the new code works as expected.',
    status: false,
    user_id: 'johnsmith',
    project_id: 3
  },
  {
    name: 'Create documentation',
    description: 'Create documentation for the new features so that users can use them.',
    status: true,
    user_id: 'saulbrego',
    project_id: 4
  },
  {
    name: 'Promote website',
    description: 'Promote the website to get more users.',
    status: false,
    user_id: 'saulbrego',
    project_id: 4
  },
  {
    name: 'Analyze data',
    description: 'Analyze the data from the website to see how it is being used.',
    status: true,
    user_id: 'peterwilliams',
    project_id: 5
  },
  {
    name: 'Make improvements',
    description: 'Make improvements to the website based on the data analysis.',
    status: false,
    user_id: 'elizabethmoore',
    project_id: 5
  },
  {
    name: 'Add new users',
    description: 'Add new users to the website.',
    status: true,
    user_id: 'johnsmith',
    project_id: 1
  },
  {
    name: 'Send emails',
    description: 'Send emails to users about the new features.',
    status: false,
    user_id: 'elizabethmoore',
    project_id: 1
  },
  {
    name: 'Respond to support tickets',
    description: 'Respond to support tickets from users.',
    status: true,
    user_id: 'peterwilliams',
    project_id: 2
  },
  {
    name: 'Improve customer support',
    description: 'Improve the customer support process so that users can get help more easily.',
    status: false,
    user_id: 'susanmiller',
    project_id: 2
  },
  {
    name: 'Launch new marketing campaign',
    description: 'Launch a new marketing campaign to get more users.',
    status: true,
    user_id: 'susanmiller',
    project_id: 3
  },
  {
    name: 'Track marketing results',
    description: 'Track the results of the marketing campaign to see how it is performing.',
    status: false,
    user_id: 'davidtaylor',
    project_id: 5
  }
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;
