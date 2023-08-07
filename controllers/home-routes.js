const router = require('express').Router();
const { Project } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // res.render('homepage', { logged_in: req.session.logged_in });
  try {
    if (!req.session.logged_in) {
      res.redirect('/signup');
    } else {
      const projectData = await Project.findAll();

      if (!projectData) {
        res.status(404).json({ message: 'No projects found!' });
        return;
      }
      const projects = projectData.map((project) => project.get({ plain:true }));
      res.render('homepage', { projects, logged_in: req.session.logged_in });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//signup route
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {logged_in: req.session.logged_in});
});

module.exports = router;