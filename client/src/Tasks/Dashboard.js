import React from 'react'
import PropTypes from 'prop-types'
import TaskList from './List'
import { SafeAreaView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { fetchTasksIfNeeded, requestTasksUpdate, pingTasksDatabase, createTask } from '../Utility/Actions'

const testTask = {
  name: 'test',
  description: 'test',
  completed: false,
  time_required: '30:00'
}
const TaskDashboard = ({ tasks, isFetching, needsUpdate, response, filter, fetchTasksIfNeeded, requestTasksUpdate, pingTasksDatabase, createTask }) => (
  <SafeAreaView>
    <Text>Test</Text>
    <TaskList tasks={tasks} filter='none' onPress={(id) => alert(id + ' says: nothing to see here')} />
    <Button title='Test Asynchronous Call' onPress={() => fetchTasksIfNeeded().then(action => alert(JSON.stringify(action)))} />
    <Button title='Pollute Tasks' onPress={() => requestTasksUpdate()} />
    <Button title='Ping Tasks Database' onPress={() => pingTasksDatabase().then(action => alert(JSON.stringify(action)))} />
    <Button title='Create Test Task' onPress={() => createTask(testTask).then(action => alert(JSON.stringify(action)))} />
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
  response: PropTypes.string,
  pingTasksDatabase: PropTypes.func,
  createTask: PropTypes.func
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
const mapDispatchToProps = {
  fetchTasksIfNeeded,
  requestTasksUpdate,
  pingTasksDatabase,
  createTask
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDashboard)
