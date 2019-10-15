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
    this.pool.query('SELECT NOW()', (e, r) => {
      console.log('Successfully queried the user database!')
    })
  }
};

module.exports = UserRepository
