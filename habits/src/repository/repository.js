class Repository {
  constructor (knex) {
    this.knex = knex
  }

  async ping () {
    console.log('Pinging the database')
    const response = await this.knex.raw('SELECT NOW()')
    return response
  }

  async getAll (user) {
    console.log('Returning all tasks for user with identifier: ' + user)
    const sql = 'SELECT * FROM Habit'
    const response = await this.knex.raw(sql)
    return response.rows
  }

  async syncHabits(data){
    try{
      console.log('Synchronizing habits for the following user: ' + data.user_id)
      data.habits.forEach(async (element) => {
        await this.knex('habit').returning('identifier').insert({user_id: data.user_id, data: JSON.stringify(element)})
      })
      return Promise.resolve({success: true})
    } catch(ex) {
      console.log(ex)
      return {success: false}
    }
  }
}

module.exports = Repository
