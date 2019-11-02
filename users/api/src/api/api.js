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

module.exports = ({ app, db }) => {
  app.get('/test/', (req, res) => { res.json({ ok: 'ok' }) })

  app.get('/ping/:parameter', _.bind(ping, { db }))

  app.get('/', async (req, res) => {
    const users = await db.GetUsers(req.query)
    res.json(users)
  })

  app.get('/:id', unimplemented)

  app.post('/new', unimplemented)

  app.put('/edit', unimplemented)

  app.post('/delete', unimplemented)

  app.get('/:name', async (req, res) => {
    const user = await db.GetUser(req.params)
    res.json(user)
  })

  app.get('/:name/habits', async (req, res) => {
    const habits = await db.GetUserHabits(req.params)
    res.json(habits)
  })

  app.get('/:name/:habitID', async (req, res) => {
    const habits = await db.GetUserHabits(req.params)
    res.json(habits)
  })
}
