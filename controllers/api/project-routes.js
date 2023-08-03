const router = require('express').Router();
const { Project, Task, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

  try {
    const projectData = await Project.findAll();
    const projects = projectData.map((project) => project.toJSON());
    res.status(200).render('show-projects', { projects, logged_in: req.session.logged_in });
    console.log(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: Task,
          attributes: ['name', 'status', 'id'],
        },
        {
          model: User,
          attributes: ['username', 'project_id'],
        },
      ],
    });

    const project = projectData.get({ plain: true });
    console.log(project);
    res.render('show-projects', {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      name: req.body.name,
    });
    res.status(200).json(newProject);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateProject = await Project.update(
      {
        project: req.body.project,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if (!updateProject[0]) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(updateProject);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No project found!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
