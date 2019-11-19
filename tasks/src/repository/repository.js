class Repository {
  constructor(knex) {
    this.knex = knex
  }

  async ping() {
    console.log('Pinging the database')
    const response = await this.knex.raw('SELECT NOW()')
    return response
  }

  async getAll(user) {
    console.log('Returning all tasks for user with identifier: ' + user)
    const sql = 'SELECT * FROM Task'
    const response = await this.knex.raw(sql)
    return response.rows
  }

  async create(task) {
    console.log('Inserting a temp task')
    const response = await this.knex('task').insert({ ...task }, ['identifier'])
    return response
  }
}

module.exports = Repository
