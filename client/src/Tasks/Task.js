import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Task = (task) => {
  const { id, name, date, description, completed, onPress } = task
  return (
    <View>
      <Text onPress={onPress.bind(this, id)}>
        id: {id}, name: {name}, date: {date}, description: {description}, completed: {completed ? 'yes' : 'no'}
      </Text>
    </View>
  )
}

Task.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  onPress: PropTypes.func.isRequired
}

export default Task
