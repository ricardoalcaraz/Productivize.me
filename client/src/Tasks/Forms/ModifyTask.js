import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Button } from 'react-native'
import uuidv1 from 'uuid/v1'

const DEFAULT_TASK = { name: '', description: '', date: '' }
export default class ModifyTask extends React.Component {
  constructor(props) {
    super(props)
    const { id, name, description, date } = Object.assign({}, DEFAULT_TASK, props.template)
    this.state = {
      id: id || uuidv1(),
      name: name,
      description: description,
      date: date,
      completed: false
    }
  }

  _onSave(task) {
    const { onSave } = this.props
    onSave && onSave(task)
  }

  handleSaveTask() {
    // create's a task task
    const task = this.state
    this._onSave(task)
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
          placeholder={'name'}
          onChangeText={(name) => this.setState({ name: name })}
          value={this.state.name}
        />
        <Text>description: </Text>
        <TextInput
          placeholder={'description'}
          onChangeText={(description) => this.setState({ description: description })}
          value={this.state.description}
        />
        <Text>Date: </Text>
        <TextInput
          placeholder={'date'}
          onChangeText={(date) => this.setState({ date: date })}
          value={this.state.date}
        />
        <Button title='save' onPress={this.handleSaveTask.bind(this)} />
        <Button title='cancel' onPress={this.handleCancel.bind(this)} />
      </View>
    )
  }
}

ModifyTask.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  template: PropTypes.object
}
