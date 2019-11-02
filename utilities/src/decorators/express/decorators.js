module.exports = { unimplemented }

function unimplemented (req, res) {
  const msg = 'This endpoint has not been implemented yet'
  console.log(msg)
  res.status(404).send(msg)
}
