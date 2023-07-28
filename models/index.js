
const User = require('./User');
const Task = require('./Task');
const Project = require('./Project');


Project.hasmany(User, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Project.hasmany(Task, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

User.hasmany(Task, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Task.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Task.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Task, Project };