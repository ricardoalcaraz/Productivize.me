const _ = require('underscore')

function unimplemented (req, res) {
  const msg = 'This endpoint has not been implemented yet'
  console.log(msg)
  res.status(404).send(msg)
}

async function ping (req, res) {
  try {
    const now = await this.db.ping()
    res.json({ success: true, params: req.params, query: req.query, body: req.body, user: res.locals.user, db: now.rows })
  } catch (e) {
    res.status(500).send(e.stack)
  }
}

async function getAll (req, res) {
  try {
    const response = await this.db.getAll()
    res.json({ success: true, db: response })
  } catch (e) {
    res.status(500).send(e.stack)
  }
}

async function insert (req, res) {
  try {
    const db = this.db
    const response = await db.create()
    res.json({ success: true, db: response })
  } catch (e) {
    res.status(500).send(e.stack)
  }
}

module.exports = ({ app, db }) => {
  app.get('/test/', (req, res) => { res.json({ ok: 'ok' }) })

  app.get('/ping/:parameter', _.bind(ping, { db }))

  app.get('/', _.bind(getAll, { db }))

  app.get('/:id', unimplemented)

  app.post('/new', _.bind(insert, { db }))

  app.put('/edit', unimplemented)

  app.post('/delete', unimplemented)

  app.post('/share', unimplemented)
}
