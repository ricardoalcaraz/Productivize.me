import React from 'react'
import PropTypes from 'prop-types'
import FilteredTaskList from './FilteredTaskLIst'
import { SafeAreaView, Text } from 'react-native'

const TaskDashboard = () => (
  <SafeAreaView>
    <Text>Test</Text>
    <FilteredTaskList filter='none' />
  </SafeAreaView>
)

TaskDashboard.propTypes = {
  tasks: PropTypes.array,
  filter: PropTypes.string
}

export default TaskDashboard
