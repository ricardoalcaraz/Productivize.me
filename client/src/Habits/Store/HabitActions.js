export const ADD_HABIT = 'ADD_HABIT'
export const DELETE_HABIT = 'DELETE_HABIT'
export const SET_HABITS = 'SET_HABITS'
export function addHabit(habit) {
    return {
        type: ADD_HABIT,
        habit
    }
}

export function deleteHabit(id) {
    return {
        type: DELETE_HABIT,
        id
    }
}

export function setHabits(habits) {
    return {
        type: SET_HABITS,
        habits
    }
}
  