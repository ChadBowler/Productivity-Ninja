const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  console.log('here');
  try {
    const projectData = await Project.findAll();
    const projects = projectData.map((project) => project.toJSON());
    res.status(200).render('show-projects', { projects });
    console.log(projects);
  } catch (err) {
    console.log(err);
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
