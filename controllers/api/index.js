const router = require('express').Router();
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/projectRoutes', projectRoutes);

module.exports = router;
