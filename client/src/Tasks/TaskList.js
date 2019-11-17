import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({ tasks, onPress }) => (
  <SafeAreaView>
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task {...item} onPress={id => alert(id)} />}
      keyExtractor={task => task.id}
    />
  </SafeAreaView >
)

TaskList.propTypes = {
  tasks: PropTypes.array,
  onPress: PropTypes.func
}

export default TaskList
