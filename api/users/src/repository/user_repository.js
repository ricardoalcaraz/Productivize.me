// TODO =>
class UserRepository {
  constructor (pool) {
    this.pool = pool
  }

  Test (description) {
    console.log('Test Message:' + description)
    return 'Hello World!'
  }

  async Query () {
    const client = await this.pool.connect()
    try {
      return await client.query('SELECT NOW()')
    } finally {
      console.log('Successfully queried the user database!')
      client.release()
    }
  }
}

module.exports = UserRepository
