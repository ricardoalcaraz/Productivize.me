import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Task from './Task'

import { connect } from 'react-redux'

const List = ({ tasks, onPress }) => (
  <SafeAreaView>
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task {...item} onPress={id => alert(id)} />}
      keyExtractor={task => task.id}
    />
  </SafeAreaView >
)

List.propTypes = {
  tasks: PropTypes.array,
  onPress: PropTypes.func
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
    tasks: filterTasks(state.tasks.items, state.tasks.filter)
  }
}

export default connect(
  mapStateToProps
)(List)
