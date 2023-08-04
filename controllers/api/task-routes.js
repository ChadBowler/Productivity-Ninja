const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');
const Project = require('../../models/Project');
router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll();
    const tasks = taskData.map((task) => task.toJSON());
    res
      .status(200)
      .render('homepage', { tasks, logged_in: req.session.logged_in });
    console.log(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);

    const project = await Project.update(
      {
        status: false,
      },
      {
        where: {
          id: req.body.project_id,
        },
      },
    );

    console.log(project);

    const newTask = await Task.create({
      ...req.body,
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      project_id: req.body.project_id,
      user_id: req.body.user_id,
    });
    console.log(newTask);
    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/complete/:id', withAuth, async (req, res) => {
  try {
    const updateTask = await Task.update(
      {
        status: true,
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
    res.status(200).redirect('back');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateTask = await Task.update(
      {
        user_id: req.body.user_id,
        name: req.body.name,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if (!updateTask[0]) {
      console.log(updateTask);
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
      },
    });
    if (!taskData) {
      res.status(404).json({ message: 'No task found with that id!' });
      return;
    }
    res.status(200).redirect('back');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
