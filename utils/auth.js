const withAuth = (req, res, next) => {

  if (!req.session.logged_in) {
    // res.status(401).send({err: 0, redirectUrl: '/login'});
    res.redirect(301, '/login');
  } else {
    next();
  }
};

module.exports = withAuth;