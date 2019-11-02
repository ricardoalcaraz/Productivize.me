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
    const sql = 'SELECT * FROM Habit'
    const response = await this.pool.query(sql)
    return response.rows
  }
};

module.exports = Repository
