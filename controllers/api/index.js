const router = require('express').Router();

const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const taskRoutes = require('./task-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);

//for any routes that don't fit any of our router.use routes
// router.get('/*', (req, res) => {
//   res.status(404).render('404');
// });

module.exports = router;
