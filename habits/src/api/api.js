const _ = require('underscore')
const { unimplemented } = require('productivize-tools').decorators.express

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
    const habits = response.map((h) => {
      h.data.identifier = h.identifier
      return h.data
    })
    res.json({ success: true, db: habits })
  } catch (e) {
    res.status(500).send(e.stack)
  }
}

async function syncHabits(req, res) {
  try{
    let response = await this.db.syncHabits(req.body)
    res.json({success: true})
  } catch(ex){

  }
}

module.exports = ({ app, db }) => {
  app.get('/test/', (req, res) => { res.json({ ok: 'ok' }) })
  app.get('/ping/:parameter', _.bind(ping, { db }))

  app.get('/', _.bind(getAll, { db }))

  app.get('/:id', unimplemented)

  app.post('/new', unimplemented)

  app.put('/edit', unimplemented)

  app.post('/delete', unimplemented)

  app.post('/share', unimplemented)

  app.post('/sync', _.bind(syncHabits, { db }))
}
