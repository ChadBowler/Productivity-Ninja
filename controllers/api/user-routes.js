const router = require('express').Router();
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await User.finAll();
    const users = userData.map((user) => user.toJSON());
    res.status(200).render('/', { users: users });
    console.log(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;