import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Task from './Task'

const List = ({ tasks, onPress }) => (
  <SafeAreaView>
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task {...item} onPress={onPress.bind(this, item.id)} />}
      keyExtractor={task => task.id}
    />
  </SafeAreaView >
)

List.propTypes = {
  tasks: PropTypes.array,
  onPress: PropTypes.func
}

export default List
