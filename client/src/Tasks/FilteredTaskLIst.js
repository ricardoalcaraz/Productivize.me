import { connect } from 'react-redux'
import TasksList from './TaskList'

const filterTasks = (tasks, filter) => {
  switch (filter) {
    default:
      return tasks
  }
}

const mapStateToProps = state => {
  return {
    tasks: filterTasks(state.tasks.storage, state.tasks.filter)
  }
}

const FilteredTaskList = connect(
  mapStateToProps
)(TasksList)

export default FilteredTaskList
