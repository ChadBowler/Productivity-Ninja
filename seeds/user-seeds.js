const { User } = require('../models');

const userData = [
  {
    user_name: 'Task 1',
    user_password: '',
  }
];

const seedUSers = () => User.bulkCreate(userDataData);

module.exports = seedUsers;