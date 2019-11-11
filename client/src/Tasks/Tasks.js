import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, Modal, CheckBox } from 'react-native'
import { connect } from 'react-redux'
import CreateTask from './Forms/CreateTask'
import { bindActionCreators } from 'redux'
import { addTask } from './Store/TaskActions'

class
Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { creatingTask: false }
  }

  handleCreateTask(task) {
    this.props.addTask(task)
    this.setState({ creatingTask: false })
  }

  setCreatingTask(status) {
    this.setState({ creatingTask: status })
  }

  render() {
    return (
      <View>
        <Text>Tasks Remaining: {this.props.tasks.length}</Text>
        {this.props.tasks.map((task, index) => (
          <Text key={index}>#{index} <CheckBox /> Name: {task.name}, Due: {task.date}, Description: {task.description}</Text>
        ))}
        <Button title='new task' onPress={this.setCreatingTask.bind(this, true)} />
        <Modal
          visible={this.state.creatingTask}
          animationType="slide"
          transparent={false}>
          <CreateTask onCreate={this.handleCreateTask.bind(this)} onCancel={this.setCreatingTask.bind(this, false)} />
        </Modal>
      </View >
    )
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  addTask: PropTypes.func
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks.storage }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTask
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
