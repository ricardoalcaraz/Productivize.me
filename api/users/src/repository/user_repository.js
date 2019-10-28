class SqlPreparer {
  constructor (baseQuery) {
    this.baseQuery = baseQuery.trim()
    this.parameters = []
    this.index = 0
  }

  And (columnName, parameter) {
    this.AddOperator('AND')
    this.baseQuery += `${columnName} = $${++this.index}`
    this.parameters.push(parameter)
  }

  Or (columnName, parameter) {
    this.AddOperator('OR')
    this.baseQuery += `${columnName} = $${++this.index}`
    this.parameters.push(parameter)
  }

  Query () {
    return `${this.baseQuery}`
  }

  Parameter () {
    return this.parameters
  }

  AddOperator (operator) {
    if (this.index === 0) {
      this.baseQuery += ' WHERE '
    } else {
      this.baseQuery += ` ${operator} `
    }
  }
}

class UserRepository {
  constructor (pool) {
    this.pool = pool
  }

  async GetUsers (params) {
    let response = []
    try {
      const sqlQuery = 'SELECT identifier as id, created_on as createdOn, last_login as lastLogin FROM profile'
      const sqlStatement = new SqlPreparer(sqlQuery, 'profile')
      if (params.name) {
        sqlStatement.And('identifier', params.name)
      }
      if (params.createdOn) {
        sqlStatement.And('created_on', params.createdOn)
      }
      if (params.lastActive) {
        sqlStatement.And('last_login', params.lastActive)
      }
      response = await this.pool.query(sqlStatement.Query(), sqlStatement.Parameter())
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
      const sqlQuery = 'SELECT identifier as id, created_on as createdOn, last_login as lastLogin FROM profile WHERE identifier = $1'
      response = await this.pool.query(sqlQuery, [params.name])
    } catch (e) {
      console.log(e)
    }
    return response
  }

  async GetUserHabits (params) {
    let response = []
    try {
      const sqlQuery = 'SELECT h.identifier as id, description, created_on, start_date, end_date, frequency_description FROM habit h INNER JOIN frequency f ON h.frequency_id = f.identifier'
      const sqlStatement = new SqlPreparer(sqlQuery, 'profile')
      if (params.name) {
        sqlStatement.And('user_id', params.name)
      }
      if (params.startDate) {
        sqlStatement.And('start_date', params.startDate)
      }
      if (params.endDate) {
        sqlStatement.And('end_date', params.endDate)
      }
      if (params.frequency) {
        sqlStatement.And('frequency', params.frequency)
      }
      if (params.habitID) {
        sqlStatement.And('h.identifier', params.habitID)
      }
      response = await this.pool.query(sqlStatement.Query(), sqlStatement.Parameter())
    } catch (e) {
      console.log(e)
    }
    return response
  }
}

module.exports = UserRepository
