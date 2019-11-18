import React from 'react'
import PropTypes from 'prop-types'
import TaskList from './List'
import { SafeAreaView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTasksIfNeeded, requestTasksUpdate } from './Actions'

function test(Auth) {
  alert(Auth)
}

const TaskDashboard = ({ tasks, isFetching, needsUpdate, response, filter, fetchTasksIfNeeded, requestTasksUpdate }) => (
  <SafeAreaView>
    <Text>Test</Text>
    <TaskList tasks={tasks} filter='none' onPress={(id) => test(id + ' says: nothing to see here')} />
    <Button title='Test Asynchronous Call' onPress={() => fetchTasksIfNeeded('smashbros').then(d => alert('asynchronous call was a success'), e => alert(JSON.stringify(e)))} />
    <Button title='Pollute Tasks' onPress={() => requestTasksUpdate()} />
    <Button title='Refresh Endpoints' onPress={() => alert('test2')} />
    <Text>Currently Fetching: {isFetching.toString()}, Needs Update: {needsUpdate.toString()}</Text>
    <Text>{response.toString()}</Text>
  </SafeAreaView >
)

TaskDashboard.propTypes = {
  tasks: PropTypes.array,
  filter: PropTypes.string,
  fetchTasksIfNeeded: PropTypes.func,
  requestTasksUpdate: PropTypes.func,
  isFetching: PropTypes.bool,
  needsUpdate: PropTypes.bool,
  response: PropTypes.string
}

const filterTasks = (tasks, filter) => {
  // convert keyed object to array.
  const array = Object.keys(tasks).map((key) => tasks[key])
  switch (filter) {
    default:
      return array
  }
}

const mapStateToProps = state => {
  return {
    tasks: filterTasks(state.tasks.items, state.tasks.filter),
    isFetching: state.tasks.isFetching,
    needsUpdate: state.tasks.needsUpdate,
    response: state.tasks.response
  }
}
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchTasksIfNeeded,
    requestTasksUpdate
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDashboard)
