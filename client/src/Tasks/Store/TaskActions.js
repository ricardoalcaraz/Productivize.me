export const addTask = task => (
  {
    type: 'ADD_TASK',
    payload: task
  }
)

export const deleteTask = taskName => (
  {
    type: 'DELETE_TASK',
    payload: taskName
  }
)

// must have a name field, and at least one modified field in payload.
export const updateTask = task => (
  {
    type: 'UPDATE_TASK',
    payload: task
  }
)
