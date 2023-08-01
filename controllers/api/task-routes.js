const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll();
    const tasks = taskData.map((task) => task.toJSON());
    res.status(200).render('/', { tasks });
    console.log(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newTask = await Task.create({
      ...req.body,
      name: req.body.task,
      project_id: req.body.project_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateTask = await Task.update(
      {
        user_id: req.session.user_id,
        name: req.body.task,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if (!updateTask[0]) {
      res.status(404).json({ message: 'No task found with this id!' });
      return;
    }
    res.status(200).json(updateTask);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!taskData) {
      res.status(404).json({ message: 'No task found for this user!' });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
