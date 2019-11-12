import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, Modal, CheckBox } from 'react-native'
import { connect } from 'react-redux'
import ModifyTask from './Forms/ModifyTask'
import { bindActionCreators } from 'redux'
import { addTask, deleteTask, updateTask } from './Store/TaskActions'

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, placeholder: null }
  }

  handleSaveTask(task) {
    console.log(this.state.placeholder)
    if (this.state.placeholder) {
      this.props.updateTask(task)
    } else {
      this.props.addTask(task)
    }
    this.setState({ showModal: false, placeholder: null })
  }

  handleDeleteTask(task) {
    this.props.deleteTask(task.name)
  }

  showModal(status, placeholder) {
    this.setState({ showModal: status, placeholder: placeholder })
  }

  render() {
    return (
      <View>
        <Text>Tasks Remaining: {this.props.tasks.length}</Text>
        {this.props.tasks.map((task, index) => (
          <View key={index}>
            <Text><CheckBox /> Name: {task.name}, Due: {task.date}, Description: {task.description}</Text>
            <Button title='edit' onPress={this.showModal.bind(this, true, task)} />
            <Button title='delete' onPress={this.handleDeleteTask.bind(this, task)} />
          </View>
        ))}
        <Button title='new task' onPress={this.showModal.bind(this, true, null)} />
        <Modal
          visible={this.state.showModal}
          animationType="slide"
          transparent={false}>
          <ModifyTask template={this.state.placeholder} onSave={this.handleSaveTask.bind(this)} onCancel={this.showModal.bind(this, false, null)} />
        </Modal>
      </View >
    )
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  addTask: PropTypes.func,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks.storage }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTask,
    updateTask,
    deleteTask
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
