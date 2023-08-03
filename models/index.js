
const User = require('./User');
const Task = require('./Task');
const Project = require('./Project');


Project.hasMany(User, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Project.hasMany(Task, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

User.hasMany(Task, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.belongsTo(Project, {
  foreignKey: 'project_id'
});

Task.belongsTo(User, {
  foreignKey: 'user_id'
});

Task.belongsTo(Project, {
  foreignKey: 'project_id'
});

module.exports = { User, Task, Project };