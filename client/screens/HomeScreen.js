import React from 'react'
import {View, Text} from 'react-native'
import SignUpForm from './signup.js'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Productivize.me</Text>
            <SignUpForm navigation={this.props.navigation}></SignUpForm>
            <Text>Copyright 2019 all rights belong to us</Text>
          </View>
        )
      }
}