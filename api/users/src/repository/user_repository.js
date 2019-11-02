class UserRepository {
  constructor (knex) {
    this.knex = knex
  }

  async GetUsers (params) {
    let response = []
    try {
      const userQueryBuilder = this.knex.select().from('profile')
      if (params.name) {
        userQueryBuilder.where('identifier', params.name)
      }
      if (params.createdOn) {
        userQueryBuilder.where('created_on', params.createdOn)
      }
      if (params.lastActive) {
        userQueryBuilder.where('last_login', params.lastActive)
      }
      response = await userQueryBuilder
    } catch (e) {
      console.log(e)
    }
    return response
  }

  /**
   * Get the user with the given params
   * name - match by identifier
   * lastLogin - match by the last login
   * @param {object} params
   */
  async GetUser (params) {
    let response = []
    try {
      response = await this.knex.select().from('profile').where('identifier', params.name)
    } catch (e) {
      console.log(e)
    }
    return response
  }

  async GetUserHabits (params) {
    let response = []
    try {
      const habitQueryBuilder = this.knex.from('habit').innerJoin('frequency', 'habit.frequency_id', 'frequency.identifier')
      if (params.name) {
        habitQueryBuilder.where('user_id', params.name)
      }
      if (params.startDate) {
        habitQueryBuilder.where('start_date', params.startDate)
      }
      if (params.endDate) {
        habitQueryBuilder.where('end_date', params.endDate)
      }
      if (params.frequency) {
        habitQueryBuilder.where('frequency', params.frequency)
      }
      if (params.habitID) {
        habitQueryBuilder.where('h.identifier', params.habitID)
      }
      response = await habitQueryBuilder
    } catch (e) {
      console.log(e)
    }
    return response
  }
}

module.exports = UserRepository
