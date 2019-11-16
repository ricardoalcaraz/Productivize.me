import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Button } from 'react-native'

export default class CreateTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      date: '',
      completed: false
    }
  }

  _onCreate(task) {
    const { onCreate } = this.props
    onCreate && onCreate(task)
  }

  handleCreateTask() {
    // create task
    const task = this.state
    this._onCreate(task)
  }

  handleCancel() {
    this._onCancel()
  }

  _onCancel() {
    const { onCancel } = this.props
    onCancel && onCancel()
  }

  render() {
    return (
      <View>
        <Text>
          Create A Task Here!
        </Text>
        <Text>Name: </Text>
        <TextInput
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <Text>description: </Text>
        <TextInput
          placeholder="description"
          onChangeText={(description) => this.setState({ description })}
        />
        <Text>Date: </Text>
        <TextInput
          placeholder="MMDDYYYY"
          onChangeText={(date) => this.setState(  { date })}
        />
        <Button title='create task' onPress={this.handleCreateTask.bind(this)} />
        <Button title='cancel' onPress={this.handleCancel.bind(this)} />
      </View>
    )
  }
}

CreateTask.propTypes = {
  onCreate: PropTypes.func
}
