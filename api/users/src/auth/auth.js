module.exports.requiresAuthentication = (req, res, next) => {
  if (!!req.session.user && !!req.session.user.id) {
    next();
  } else {
    res.json({ status: 'unauthorized' });
  }
};
