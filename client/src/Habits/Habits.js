import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, TextInput } from 'react-native'
import HabitList from './HabitList.js'
import { connect } from 'react-redux'
import {addHabit, deleteHabit} from './Store/HabitActions.js'

class Habits extends React.Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  render() {
    return (
      <View>
        <Text>
          Hello From Habits!
        </Text>
        <TextInput placeholder='Insert habit here' onChangeText={text => this.setState({text})}/>
        <HabitList habits={this.props.habits}></HabitList>
        <Button title="Add Habit" onPress={() => this.props.addHabit({description: this.state.text})}/>
      </View>
    )
  }
}

Habits.propTypes = {
  habits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    habits: state.habits.habits
  }
}

const mapDispatchToProps = {
  addHabit,
  deleteHabit
}

export default connect(mapStateToProps, mapDispatchToProps)(Habits)