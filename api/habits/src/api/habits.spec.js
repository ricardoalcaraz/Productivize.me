const request = require('supertest')
const server = require('../server/server.js')
const expect = require('chai').expect
const assert = require('chai').assert
const should = require('should')

describe('Habits API', () => {
  let app = null
  const userHabits = [{
    UserName: 'Carol',
    HabitDescription: 'Talk shit about immigrants',
    HabitFrequency: 'Monthly'
  }, {
    UserName: 'Carol',
    HabitDescription: 'Ignore the dishes',
    HabitFrequency: 'Daily'
  }]

  const testRepo = {
    GetAllUserHabits (userName) {
      if (userName == 'Carol') {
        return Promise.resolve(userHabits)
      } else {

      }
    },
    InsertUserHabits (habit) {
      return Promise.resolve(success)
    }
  }

  beforeEach(() => {
    return server.start({
      port: 3000,
      db: testRepo
    }).then(serv => {
      app = serv
    })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  it('can return all habits', (done) => {
    request(app)
      .get('/GetAllUserHabits?UserName=Carol')
      .expect((res) => res.body.should.be.instanceOf(Array).and.have.length(2))
      .expect((res) => res.body[0].UserName.should.equal(userHabits[0].UserName))
      .expect((res) => res.body[1].UserName.should.equal(userHabits[1].UserName))
      .expect(200, done)
  })
})
