module.exports.visit = (req, res) => {
  const v = req.session.visits;
  req.session.visits = !!v ? v + 1 : 1;
  res.send("Visiting..");
};

module.exports.visited = (req, res) => {
  console.log('Testing auth');
  res.send(`Visits: ${req.session.visits}`);
};