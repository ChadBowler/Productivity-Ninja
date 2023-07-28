const { Task } = require('../models');

const taskData = [
  {
    task_name: 'Task 1',
    task_description: '',
    due_date: '',
    assigned_user: ''
  }
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;