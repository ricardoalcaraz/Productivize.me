class Repository {
  constructor (pool) {
    this.pool = pool
  }

  async ping () {
    console.log('Pinging the database')
    const sql = 'SELECT NOW()'
    const response = await this.pool.query(sql)
    return response
  }

  async getAll (user) {
    console.log('Returning all tasks for user with identifier: ' + user)
    const sql = 'SELECT * FROM Task'
    const response = await this.pool.query(sql)
    return response.rows
  }

  async create () {
    console.log('Inserting a temp task')
    const sql = 'INSERT INTO Task(date, name, description, completed, time_required)' // displaying composition.
    const sql2 = 'VALUES ($1, $2, $3, $4, $5)'
    const response = await this.pool.query(`${sql} + ${sql2}`, ['Nov-01-19', 'Test', 'Demo', 1, null])
    return response.rows
  }
}

module.exports = Repository
