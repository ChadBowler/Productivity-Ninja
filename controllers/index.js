const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//for any routes that aren't the homepage or inside the api directory
router.get('*', (req, res) => {
  res.status(404).render('404');
});

module.exports = router;
