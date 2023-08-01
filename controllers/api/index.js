const router = require('express').Router();
const userRoutes = require('./user-routes');
const taskRoutes = require('./task-routes');
const projectRoutes = require('./project-routes');

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
