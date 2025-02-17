import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { addHabit } from '../Utility/Actions'
import { connect } from 'react-redux'

//TODO: Expand this out and make it actually useful
const AddHabit = (props) => {
    const[userInput, setUserInput] = React.useState('')
    return (
        <View>
            <TextInput placeholder='Insert habit here' value={userInput} onChangeText={text => setUserInput(text)}/>
            <Button title='Add Habit' onPress={() => {
                props.addHabit({description: userInput})
                setUserInput('')
                props.navigation.goBack()
            }}/>
        </View>
    )
}

export default connect(null, { addHabit })(AddHabit)