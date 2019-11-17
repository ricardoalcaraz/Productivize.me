import React from 'react'
import PropTypes from 'prop-types'
import FilteredTaskList from './FilteredTaskLIst'
import { SafeAreaView, Text, Button } from 'react-native'
import Authenticated from '../Authentication/Authenticated'
function test(Auth) {
  alert(Auth)
}

const TaskDashboard = ({ Auth }) => (
  <SafeAreaView>
    <Text>Test</Text>
    <FilteredTaskList filter='none' />
    <Button title='Test Endpoint' onPress={() => test(Auth)} />
  </SafeAreaView >
)

TaskDashboard.propTypes = {
  tasks: PropTypes.array,
  filter: PropTypes.string
}

export default Authenticated(TaskDashboard)
