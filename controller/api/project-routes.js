const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const projectData = await Projects.findAll();
    const projects = projectData.map((project) => project.toJSON());
    res.status(200).render('/', { projects });
    console.log(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      project: req.body.project,
      project_id: req.body.project_id,
      user_id: req.session.user_id,
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
        user_id: req.session.user_id,
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
        user_id: req.session.user_id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No project found for this user!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
